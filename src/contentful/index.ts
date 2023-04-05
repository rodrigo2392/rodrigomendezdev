import {createClient, ContentfulClientApi} from 'contentful'

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || ''
const space = process.env.CONTENTFUL_SPACE_ID || ''
const environment = process.env.CONTENTFUL_ENVIRONMENT || ''

let client: ContentfulClientApi

if(accessToken !=='') 
{
    client = createClient({
        accessToken,
        space,
        environment,
    }) as ContentfulClientApi
}

export const getVideos = async () => {
    const response = await client.getEntries({
        content_type: 'youtubeVideo',
      })
  
    return response.items;
};