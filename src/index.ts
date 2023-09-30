import * as express from "express";
import * as bodyParser from "body-parser";

const { routes } = require("./routes/index");

let app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// app routes
routes(app);

let server: any = app.listen(3013, function () {
  let host: any = server.address().address;
  let port: any = server.address().port;
  
  console.log("App Listening at http://%s:%s", host, port);
});
