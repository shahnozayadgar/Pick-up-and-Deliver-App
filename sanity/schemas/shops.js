
export default ({
    name: 'shops',
    title: 'Shops',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Shop Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        type: "image",
        title: "Shops Image",
      },
    ],
  
  })
  