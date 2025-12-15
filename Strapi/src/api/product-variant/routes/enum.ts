export default {
  routes: [
    {
      method: 'GET',
      path: '/product-variants/enums',
      handler: 'product-variant.enums',
      config: {
        auth: false,
      },
    },
  ],
};
