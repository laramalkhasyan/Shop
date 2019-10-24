export default function() {
  // this.namespace = '/api';
  this.get('/shops', (schema) => {
    return {
      data: [
        {id: 1, type: 'shops', attributes: { name: 'Shop name' }},
        {id: 2, type: 'shops', attributes: { name: 'Bata' }},
        {id: 3, type: 'shops', attributes: { name: 'Debenhams' }},
        {id: 4, type: 'shops', attributes: { name: 'Some shop' }},
        {id: 5, type: 'shops', attributes: { name: 'Shop name 1' }},
        // {id: 2, name: 'Some shop' },
        // {id: 3,name: 'Bata' },
        // {id: 4, name: 'Debenhams' },
        // {id: 5, name: 'Shop name 1' },
      ]
      // shops: [
      //   {id: 1, name: 'Shop name' },
      //   {id: 2, name: 'Some shop' },
      //   {id: 3,name: 'Bata' },
      //   {id: 4, name: 'Debenhams' },
      //   {id: 5, name: 'Shop name 1' },
      // ]
    };
  });
  // this.get('/shops/:id', (schema, request) => {
  //   return schema.db.shops.id;
  // });
}
