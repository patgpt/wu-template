/**
 * This module provides a function to revalidate the cache for a specific tag in Contentful.
 * It uses Next.js's `revalidateTag` function to trigger a revalidation of all pages that depend on the tag.
 * This is useful when you want to update the data in the cache without redeploying the site.
 *
 * @see {@link https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration Next.js ISR Documentation}
 * @see {@link https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links Contentful Links Documentation}
 * @module revalidationRoute
 */

import {NextRequest, NextResponse} from "next/server";
import { revalidateTag } from "next/cache";

/**
 * Handles a POST request to revalidate a specific cache tag.
 *
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>} - The response to the request.
 */
export async function POST(request:NextRequest): Promise<NextResponse> {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get("x-vercel-reval-key");

    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Revalidate the cache for the "articles" tag in Contentful. This will trigger a revalidation of all pages that depend on this tag.
    revalidateTag("articles");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}