
const userSchema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 3 },
      email: { 
        type: "string", 
        format: "email", 
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" // Custom regex for email validation
      }
    },
    required: ["name", "email"],
    additionalProperties: false,
  };
  

module.exports = userSchema;