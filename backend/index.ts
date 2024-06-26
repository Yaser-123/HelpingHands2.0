import { app, dbSession } from "./src/app";

app.listen(process.env.PORT || 3001, async () => {
 await dbSession.setup();
  console.log(`Listening to PORT: ${process.env.PORT || 3001}`);
});
