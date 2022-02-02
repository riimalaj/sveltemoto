const errorMiddleware = async (context, next) => {
    try {
      await next();
    } catch (e) {
      console.log("middle-errro: ", e);
    }
  };

  export { errorMiddleware };