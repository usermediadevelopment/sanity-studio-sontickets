// ./schemas/operatingHour.ts
import {defineType, defineField} from 'sanity'

export const operatingHourSchema = defineType({
  name: 'operatingHour',
  title: 'Operating Hour',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day of the Week',
      type: 'string',
      options: {
        list: [
          {title: 'Monday', value: 'Monday'},
          {title: 'Tuesday', value: 'Tuesday'},
          {title: 'Wednesday', value: 'Wednesday'},
          {title: 'Thursday', value: 'Thursday'},
          {title: 'Friday', value: 'Friday'},
          {title: 'Saturday', value: 'Saturday'},
          {title: 'Sunday', value: 'Sunday'},
        ],
      },
    }),
    defineField({
      name: 'opensAt',
      title: 'Opens At',
      type: 'string',
      description: 'Opening time (e.g., 9:00 AM)',
    }),
    defineField({
      name: 'closesAt',
      title: 'Closes At',
      type: 'string',
      description: 'Closing time (e.g., 10:00 PM)',
    }),
    defineField({
      name: 'closed',
      title: 'Closed',
      type: 'boolean',
      description: 'Check if the restaurant is closed on this day',
    }),
  ],
})
