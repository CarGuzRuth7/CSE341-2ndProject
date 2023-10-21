const { checkSchema, validationResult } = require('express-validator');

const validateData = (schema) => {
  //validates the given schema with the information requested, else throw error array
  return [
    checkSchema(schema),
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({ errors: error.mapped() });
      }
      next();
    }
  ];
};

module.exports = validateData;
