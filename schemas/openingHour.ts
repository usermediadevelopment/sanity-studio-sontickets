import { defineType, defineField } from 'sanity';

export const openingHourSchema = defineType({
  name: 'openingHour',
  title: 'Opening Hours',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day of the Week',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'Monday' },
          { title: 'Tuesday', value: 'Tuesday' },
          { title: 'Wednesday', value: 'Wednesday' },
          { title: 'Thursday', value: 'Thursday' },
          { title: 'Friday', value: 'Friday' },
          { title: 'Saturday', value: 'Saturday' },
          { title: 'Sunday', value: 'Sunday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'openingTime',
      title: 'Opening Time',
      type: 'string',
    }),
    defineField({
      name: 'closingTime',
      title: 'Closing Time',
      type: 'string',
    }),
    defineField({
      name: 'isClosed',
      title: 'Closed on this Day',
      type: 'boolean',
    }),
  ],
});
