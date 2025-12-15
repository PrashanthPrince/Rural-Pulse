const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  // async find(ctx) {
  //   const userId = ctx.query["filters[userId][$eq]"];
  //   const products = await strapi.db.query("api::product.product").findMany({
  //     where: { userId: parseInt(userId, 10) },
  //   });
  //   return { data: products };
  // },
}));
