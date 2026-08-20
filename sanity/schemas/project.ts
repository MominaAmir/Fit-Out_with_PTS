import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Commercial', value: 'commercial' },
          { title: 'Residential', value: 'residential' },
          { title: 'Retail', value: 'retail' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Education', value: 'education' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Government', value: 'government' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Interior Fit-Out', value: 'interior-fit-out' },
          { title: 'MEP Works', value: 'mep-works' },
          { title: 'Technical Drawings', value: 'technical-drawings' },
          { title: 'Project Management', value: 'project-management' },
          { title: 'Fit-Out Approvals', value: 'fit-out-approvals' },
          { title: 'Joinery & Carpentry', value: 'joinery' },
        ],
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year Completed',
      type: 'number',
      validation: Rule => Rule.required().min(2000).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'area',
      title: 'Area (sq ft)',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sector',
      media: 'mainImage',
    },
  },
  orderings: [
    {
      title: 'Year Completed (Newest)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
});