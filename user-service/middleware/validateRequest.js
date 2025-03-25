const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true }); // Enable all error messages
addFormats(ajv); // Add email format validation

const validateRequest = (schema) => (req, res, next) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);

  if (!valid) {
    const errors = validate.errors.map((err) => {
      return {
        field: err.instancePath.replace("/", ""), 
        error: err.message,
      };
    });

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }
  
  next();
};

module.exports = validateRequest;
