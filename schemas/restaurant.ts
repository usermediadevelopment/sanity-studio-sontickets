// ./schemas/restaurant.ts
import {defineType, defineField} from 'sanity'

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
      name: 'reservationUrl',
      title: 'Reservation URL',
      type: 'url',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'cuisine',
      title: 'Cuisine Type',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cuisine'}]}],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location on Map',
      type: 'geopoint',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'website',
          title: 'Website URL',
          type: 'url',
        }),
        defineField({
          name: 'socialMedia',
          title: 'Social Media',
          type: 'array',
          of: [{type: 'socialMedia'}],
        }),
      ],
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'array',
      of: [{type: 'operatingHour'}],
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
      options: {
        list: [
          {title: '$', value: '$'},
          {title: '$$', value: '$$'},
          {title: '$$$', value: '$$$'},
          {title: '$$$$', value: '$$$$'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'review'}]}],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities and Features',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Outdoor Seating', value: 'Outdoor Seating'},
          {title: 'Wi-Fi', value: 'Wi-Fi'},
          {title: 'Parking', value: 'Parking'},
          {title: 'Wheelchair Accessible', value: 'Wheelchair Accessible'},
          {title: 'Pet Friendly', value: 'Pet Friendly'},
          {title: 'Live Music', value: 'Live Music'},
          {title: 'Private Dining', value: 'Private Dining'},
        ],
      },
    }),
    defineField({
      name: 'dietaryOptions',
      title: 'Dietary Options',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Vegetarian', value: 'Vegetarian'},
          {title: 'Vegan', value: 'Vegan'},
          {title: 'Gluten-Free', value: 'Gluten-Free'},
          {title: 'Halal', value: 'Halal'},
          {title: 'Kosher', value: 'Kosher'},
        ],
      },
    }),
    defineField({
      name: 'paymentOptions',
      title: 'Payment Options',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cash', value: 'Cash'},
          {title: 'Credit Card', value: 'Credit Card'},
          {title: 'Mobile Payments', value: 'Mobile Payments'},
        ],
      },
    }),
  ],
})
