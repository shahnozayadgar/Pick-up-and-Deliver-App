
export default ({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Services Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }, 
    {
      name: 'price',
      type: 'number',
      title: 'Price of Services',
    },
  ],

})
