import {defineType, defineField} from 'sanity'

export const locationSchema = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [{type: 'country'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'area',
      title: 'Area',
      type: 'reference',
      to: [{type: 'area'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    }),

    defineField({
      name: 'geoLocation',
      title: 'Geolocation',
      type: 'geopoint',
    }),

    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'menuCategory'}],
    }),
    defineField({
      name: 'schedule',
      title: 'Operating Hours',
      type: 'array',
      of: [{type: 'openingHour'}],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'contactInfo',
    }),

    defineField({
      name: 'reservation',
      title: 'Online Reservation Available',
      type: 'boolean',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
