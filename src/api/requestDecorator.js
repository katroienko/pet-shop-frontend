// const requestDecorator = requestFunction => {
//     return async (payload) => {
//         try {
//             const data = await requestFunction(payload)
//             return { data };
//         }
//         catch (error) {
//             return { error };
//         }
//     }
// };

// export default requestDecorator;

const requestDecorator = (requestFunction) => {
  return async (...args) => {
    try {
      const data = await requestFunction(...args);
      return { data };
    } catch (error) {
      return { error };
    }
  };
};

export default requestDecorator;