import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';

export default defineConfig({
  basePath: '/studio',
  name: 'Mohammad_Ali_studio',
  title: 'Mohammad Ali Studio',
  projectId: 'a6axjat0',
  dataset: 'production',

  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
