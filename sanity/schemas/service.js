
export default ({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Service Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Desccription",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "long_description",
      type: "text", 
      title: "Long Description",
      validation: (Rule) => Rule.max(1000), // Adjust the max length as needed
    },
    {
      name: "image",
      type: "image",
      title: "Service Image",
    },
    {
      name: "rating",
      type: "number",
      title: "Enter review",
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      of: [{ type: "reference", to: [{type: "services"}] }],
    }
  ],
})
