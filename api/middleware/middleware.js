const errorMiddleware = async (context, next) => {
    try {
      await next();
    } catch (e) {
      console.log("middle-errro: ", e);
      Deno.writeTextFile("error", e + "\n\n", { "append": true });

    }
  };

  export { errorMiddleware };