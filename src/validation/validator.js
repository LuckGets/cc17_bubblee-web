const validator = (schema, input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  if (error) {
    const errorResponse = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    return errorResponse;
  }
};

export default validator;
