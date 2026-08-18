import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'clientCompany', title: 'Client Company', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'rating', title: 'Rating', type: 'number' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image' }),
  ]
})
