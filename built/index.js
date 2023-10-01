"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { routes } = require("./routes/index");
let app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// app routes
routes(app);
let server = app.listen(3013, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("App Listening at http://%s:%s", host, port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFHbkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRTdDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FDTCxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pCLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUNILENBQUM7QUFFRixhQUFhO0FBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRVosSUFBSSxNQUFNLEdBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDakMsSUFBSSxJQUFJLEdBQVEsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxJQUFJLElBQUksR0FBUSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxDQUFDIn0=