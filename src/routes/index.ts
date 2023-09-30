// users controllers
import * as usersClient from "./../controllers/api/v1/client/users/index";
import * as usersAdmin from "./../controllers/api/v1/admin/users/index";

exports.routes = (app: any) => {
  // ADMIN ROUTES
  // /api/v1/admin
  app.route("/api/v1/admin/users").post(usersClient.create);
  app.route(`/api/v1/admin/users/:id`).get(usersClient.create);
  app.route(`/api/v1/admin/users/balances/:id`).get(usersClient.create);

  // CLIENT ROUTES
  // /api/v1/client
  app.route(`/api/v1/client/users/:id`).get(usersAdmin.create);
  app.route(`/api/v1/client/users/:id`).post(usersAdmin.create);
};
