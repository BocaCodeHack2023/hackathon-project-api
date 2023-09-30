// users controllers
import * as usersClient from "./../controllers/api/v1/client/users/index";
import * as usersAdmin from "./../controllers/api/v1/admin/users/index";

exports.routes = (app: any) => {
  // ADMIN ROUTES
  // /api/v1/admin
  app.route("/api/v1/admin/users").post(usersAdmin.create);
  app.route("/api/v1/admin/users").get(usersAdmin.index);
  app.route(`/api/v1/admin/users/:id`).get(usersAdmin.show);
  app.route(`/api/v1/admin/users/:id`).put(usersAdmin.update);
  app.route(`/api/v1/admin/users/:id`).delete(usersAdmin.destroy);

  // CLIENT ROUTES
  // /api/v1/client
  app.route("/api/v1/admin/users").post(usersClient.create);
  app.route(`/api/v1/admin/users/:id`).get(usersClient.show);
  app.route(`/api/v1/admin/users/:id`).put(usersClient.update);
};
