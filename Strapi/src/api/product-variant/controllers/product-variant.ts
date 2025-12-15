/**
 * product-variant controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::product-variant.product-variant',
  ({ strapi }) => ({
    async enums(ctx) {
      const contentType =
        strapi.contentTypes['api::product-variant.product-variant'];

      ctx.body = {
        weight_unit: contentType.attributes.weight_unit?.enum || [],
      };
    },
  })
);
