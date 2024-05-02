const contentfulManagement = require("contentful-management")

require("dotenv").config({ path: ".env.local"})

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,

    })

    return contentfulClient
        .getSpace("5ij53kbwz0j5")
        .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}