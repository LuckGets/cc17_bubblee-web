const convertISOtoLocal = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString();
};

export default convertISOtoLocal;
