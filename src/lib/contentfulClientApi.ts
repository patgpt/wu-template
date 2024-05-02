/**
 * This module provides a client for interacting with the Contentful API.
 * It uses the JavaScript/TypeScript Contentful client for full type safety and less setup.
 * @module contentfulClientApi
 */

import {ContentfulClientApi, createClient, EntryCollection, EntrySkeletonType} from "contentful";
import {Author} from "next/dist/lib/metadata/types/metadata-types";
import {Entries} from "type-fest";
import {IAuthor, IAuthorFields, IBlogPageFields} from "../../@types/generated/contentful";

/**
 * The Contentful client instance.
 * @type {ContentfulClientApi}
 */
const client: ContentfulClientApi<any> = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    // host: 'preview.contentful.com', // TODO: Use the preview API
    environment: 'master' // TODO: Use the master environment for production, or another environment for staging
});

/**
 * Fetches all entries from the Contentful space.
 * Logs the entries to the console.
 * @returns {Promise<void>}
 */
client.getEntries()
    .then((response) => console.log(response.items))
    .catch(console.error);

/**
 * Asynchronously fetches all entries from the Contentful space.
 * Logs the entries to the console.
 * @returns {Promise<void>}
 */
export const getEntries = async (): Promise<void> => {
    try {
        const response = await client.getEntries();
        await getPageEntries();
        console.log(response.items);
    } catch (error) {
        console.error(error);
    }
}

const getAuthorEntries = async (): Promise<void> => {
    try {

        const response = await client.getEntries<EntrySkeletonType<IAuthorFields>>({
            limit: 1000,
        });
        console.log(response.items, 'Author entries ##################');
    } catch (error) {
        console.error(error);
    }
}


const getPageEntries = async (): Promise<void> => {
    try {

        const response = await client.getEntries<EntrySkeletonType<IBlogPageFields>>({
            limit: 1000,
        });
        console.log(response.items[0].fields.body, 'Page entries ##################');
    } catch (error) {
        console.error(error);
    }
}



const GetHomePage = async (): Promise<void> => {
    try {

        const response = await client.getEntries<EntrySkeletonType<IBlogPageFields, "">>({
            limit: 1000,
        });
        console.log(response.items[0].fields.body, 'Page entries ##################');
    } catch (error) {
        console.error(error);
    }
}