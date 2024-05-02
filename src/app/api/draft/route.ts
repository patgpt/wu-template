/**
 * This module provides a function to handle GET requests for draft articles in Contentful.
 * It uses Next.js's `draftMode` function to enable draft mode and redirect to the draft article.
 * This is useful when you want to preview draft articles before they are published.
 *
 * @see {@link https://nextjs.org/docs/basic-features/data-fetching#preview-mode Next.js Preview Mode Documentation}
 * @see {@link https://www.contentful.com/developers/docs/references/content-preview-api/ Contentful Preview API Documentation}
 * @module draftRoute
 */

import { getArticle } from "@/lib/api";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import {NextRequest} from "next/server";

/**
 * Handles a GET request to preview a draft article.
 *
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<Response>} - The response to the request.
 */
export async function GET(request:NextRequest): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");

    if (!secret || !slug) {
        return new Response("Missing parameters", { status: 400 });
    }

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
        return new Response("Invalid token", { status: 401 });
    }

    const article = await getArticle(slug);

    if (!article) {
        return new Response("Article not found", { status: 404 });
    }

    // Enable draft mode in Next.js and redirect to the draft article
    draftMode().enable();
    redirect(`/articles/${article.slug}`);
}