import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "v1h5wol1",
  dataset: "production",
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);







