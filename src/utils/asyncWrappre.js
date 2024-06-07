const asyncWrapper = (fn) => {
  return () => {
    try {
      fn();
    } catch (err) {
      console.log(err);
    }
  };
};

export default asyncWrapper
