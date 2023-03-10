import { client } from './sanity.clients';
import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
