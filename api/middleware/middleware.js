const errorMiddleware = async (context, next) => {
    try {
      await next();
    } catch (e) {
      console.log("middle-error: ", e);
      Deno.writeTextFile("../error.log", e + "\n\n", { "append": true });

    }
  };

  export { errorMiddleware };