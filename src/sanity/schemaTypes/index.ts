import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { project } from './project'
import { service } from './service'
import { testimonial } from './testimonial'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, project, service, testimonial, post],
}
