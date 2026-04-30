import type { StructureResolver } from 'sanity/structure'
import { CogIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('post').title('News Posts'),
    ])
