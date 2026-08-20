import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

import project from '../schemas/project'
import service from '../schemas/service'
import testimonial from '../schemas/testimonial'
import teamMember from '../schemas/teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, project, service, testimonial, teamMember],
}