const setHoursService = (date, hour) => {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + hour);
  return newDate.toISOString();
};

export default setHoursService;
