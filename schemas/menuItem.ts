// ./schemas/menuItem.ts
import {defineType, defineField} from 'sanity'

export const menuItemSchema =  defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Dish Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dietaryInfo',
      title: 'Dietary Information',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Vegetarian', value: 'Vegetarian'},
          {title: 'Vegan', value: 'Vegan'},
          {title: 'Gluten-Free', value: 'Gluten-Free'},
          {title: 'Contains Nuts', value: 'Contains Nuts'},
        ],
      },
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{type: 'restaurant'}],
    }),
  ],
})
