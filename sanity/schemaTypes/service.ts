import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'string' }),
    defineField({ name: 'body', title: 'Full Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'icon', title: 'Icon', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Fit-Out','Technical Services','Drawings/Diagrams'] } }),
  ]
})
