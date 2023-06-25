import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 const client  = sanityClient({
  projectId:"wdrfyyvb",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token:"skbXFvGVQFxlLjqECYL5tXQu1Bqr7b4h59uXtdsa61iryMAE3K99gd1vfFIsNVooTYkGCevzAEVbgrQzMZgMlzgVWANZjoV8OOCjHkWGuB3BkbL9Ga3DMQ7bh42qXfKhieTaD643dWDRKwkoAUOkJetRKlc3ZM4jQKxZg0OgftQDxUOZ4sR5",
});

export default client 

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);