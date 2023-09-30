import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

const { routes } = require("./routes/index");

let app = express();

// Use the cors middleware with appropriate options
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://acs-hackathon-2023-lmkw.web.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app routes
routes(app);

let server: any = app.listen(3013, function () {
  let host: any = server.address().address;
  let port: any = server.address().port;

  console.log("App Listening at http://%s:%s", host, port);
});
