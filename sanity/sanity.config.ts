import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'PTS Sanity Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xl5ofmgx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
