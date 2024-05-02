const contentfulManagement = require('contentful-management');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: './.env.local'});

async function updateContentType(configPath = './field-config.json') {
    const client = contentfulManagement.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
    });

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);

    // Replace 'content_type_id' with 'seoMetadata'
    const contentType = await environment.getContentType('seoMetadata');

    // Read the field configuration from a JSON file provided via command line argument
    const fieldConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    // Add the new field to the content type using the data from the JSON file
    contentType.fields.push(fieldConfig);

    // Update and publish the content type
    await contentType.update();
    console.log('Content type updated successfully.');
    await contentType.publish();
    console.log('Content type published successfully.');
}



// Process command line arguments to get the JSON file path
const configFilePath = process.argv[2];
updateContentType(configFilePath).catch(console.error);
