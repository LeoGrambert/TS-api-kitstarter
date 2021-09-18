import joi from 'joi';

export const StarterSchema = joi
  .object({
    message: joi.string().required(),
  })
  .meta({ className: 'IStarter' })
  .description('a starter schema definition');
