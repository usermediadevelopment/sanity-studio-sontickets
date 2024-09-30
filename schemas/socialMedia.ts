// ./schemas/socialMedia.ts
import {defineType, defineField} from 'sanity'

export const socialMediaSchema =  defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'LinkedIn', value: 'linkedin'},
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
