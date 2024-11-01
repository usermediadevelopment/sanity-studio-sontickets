import {defineType, defineField} from 'sanity'
import {
  ambianceOptions,
  dietaryPreferencesOptions,
  entertainmentOptions,
  facilitiesOptions,
  paymentOptions,
  suitableForOptions,
} from './data/amenities'

export const restaurantSchema = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
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
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),

    defineField({
      name: 'reservationUrl',
      title: 'Online Reservation URL',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule) => Rule.required().min(1),
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
      name: 'priceRange',
      title: 'Price Range',
      type: 'object',
      fields: [
        defineField({
          name: 'minPrice',
          title: 'Minimum Price',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'maxPrice',
          title: 'Maximum Price',
          type: 'number',
          validation: (Rule) =>
            Rule.required()
              .min(0)
              .custom((maxPrice, context) => {
                const {minPrice} = context.parent as {minPrice: number}
                if (minPrice !== undefined && maxPrice !== undefined && maxPrice < minPrice) {
                  return 'Maximum price should be greater than or equal to minimum price'
                }
                return true
              }),
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: [
              {title: 'COP', value: 'COP'},
              {title: 'EUR', value: 'EUR'},
              {title: 'GBP', value: 'GBP'},
              // Add more currencies as needed
            ],
          },
          initialValue: 'USD',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [{type: 'socialMedia'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
