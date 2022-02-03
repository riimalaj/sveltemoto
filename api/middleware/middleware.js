const errorMiddleware = async (context, next) => {
    try {
      await next();
    } catch (e) {
      console.log("middle-error: ", e);
      Deno.writeTextFile("../error.log", e + "\n\n", { "append": true });

    }
  };

const time = async(context, next) => {
  const start = Date.now();
  console.log("Execution started: ", start);
  await next();
  const end = Date.now() - start;
  console.log("Execution ended: ", end);
} 

  export { errorMiddleware, time };