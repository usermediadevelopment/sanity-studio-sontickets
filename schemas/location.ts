import {defineType, defineField} from 'sanity'
import {
  ambianceOptions,
  dietaryPreferencesOptions,
  entertainmentOptions,
  facilitiesOptions,
  paymentOptions,
  suitableForOptions,
} from './data/amenities'

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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
    }),

    defineField({
      name: 'googlePlaceId',
      title: 'Google Place ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
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

    // 5. Procedimientos
    defineField({
      name: 'outstandingFeatures',
      title: 'Aspectos sobresalientes',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // 1. Restricciones y Preferencias Dietéticas
    defineField({
      name: 'dietaryPreferences',
      title: 'Preferencias Dietéticas',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: dietaryPreferencesOptions,
      },
    }),

    // 2. Ambiente y Experiencia
    defineField({
      name: 'ambiance',
      title: 'Ambiente y Experiencia',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: ambianceOptions,
      },
    }),

    // 3. Servicios y Facilidades
    defineField({
      name: 'facilities',
      title: 'Servicios y Facilidades',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: facilitiesOptions,
      },
    }),

    // 4. Entretenimiento y Eventos
    defineField({
      name: 'entertainment',
      title: 'Entretenimiento y Eventos',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: entertainmentOptions,
      },
    }),

    // 6. Adecuado para
    defineField({
      name: 'suitableFor',
      title: 'Adecuado para',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: suitableForOptions,
      },
    }),

    // 9. Opciones de Pago y Reservación
    defineField({
      name: 'paymentOptions',
      title: 'Opciones de Pago y Reservación',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: paymentOptions,
      },
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
