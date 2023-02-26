import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
    },
  ],
})
