// ./schemas/cuisine.ts
import {defineType, defineField} from 'sanity'

export const cuisineSchema = defineType({
  name: 'cuisine',
  title: 'Cuisine',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Cuisine Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
