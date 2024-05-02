/**
 * This module provides a function to handle GET requests for disabling draft mode in Next.js.
 * It uses Next.js's `draftMode` function to disable draft mode.
 * This is useful when you want to disable the preview of draft articles.
 *
 * @see {@link https://nextjs.org/docs/basic-features/data-fetching#preview-mode Next.js Preview Mode Documentation}
 * @module disableDraftRoute
 */

import { draftMode } from "next/headers";

/**
 * Handles a GET request to disable draft mode.
 *
 * @returns {Response} - The response to the request.
 */
export async function GET(): Promise<Response> {
    draftMode().disable();
    return new Response("Draft mode is disabled");
}