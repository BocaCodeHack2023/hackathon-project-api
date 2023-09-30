// client controllers
import * as usersClient from "./../controllers/api/v1/client/users/index";
import * as screeningsClient from "./../controllers/api/v1/client/screenings/index";
import * as locationsClient from "./../controllers/api/v1/client/locations/index";
import * as ridesClient from "./../controllers/api/v1/client/rides/index";

// admin controllers
import * as usersAdmin from "../controllers/api/v1/admin/users/index";
import * as organizationsAdmin from "../controllers/api/v1/admin/users/index";
import * as screeningsAdmin from "./../controllers/api/v1/admin/screenings/index";
import * as locationsAdmin from "./../controllers/api/v1/admin/locations/index";
import * as ridesAdmin from "./../controllers/api/v1/admin/rides/index";

exports.routes = (app: any) => {
  // ADMIN ROUTES
  // /api/v1/admin
  app.route("/api/v1/admin/users").post(usersAdmin.create);
  app.route("/api/v1/admin/users").get(usersAdmin.index);
  app.route(`/api/v1/admin/users/:id`).get(usersAdmin.show);
  app.route(`/api/v1/admin/users/:id`).put(usersAdmin.update);
  app.route(`/api/v1/admin/users/:id`).delete(usersAdmin.destroy);

  app.route("/api/v1/admin/organizations").post(organizationsAdmin.create);
  app.route("/api/v1/admin/organizations").get(organizationsAdmin.index);
  app.route(`/api/v1/admin/organizations/:id`).get(organizationsAdmin.show);
  app.route(`/api/v1/admin/organizations/:id`).put(organizationsAdmin.update);
  app
    .route(`/api/v1/admin/organizations/:id`)
    .delete(organizationsAdmin.destroy);

  app.route("/api/v1/admin/screenings").post(screeningsAdmin.create);
  app.route("/api/v1/admin/screenings").get(screeningsAdmin.index);
  app.route(`/api/v1/admin/screenings/:id`).get(screeningsAdmin.show);
  app.route(`/api/v1/admin/screenings/:id`).put(screeningsAdmin.update);
  app.route(`/api/v1/admin/screenings/:id`).delete(screeningsAdmin.destroy);

  app.route("/api/v1/admin/locations").post(locationsAdmin.create);
  app.route("/api/v1/admin/locations").get(locationsAdmin.index);
  app.route(`/api/v1/admin/locations/:id`).get(locationsAdmin.show);
  app.route(`/api/v1/admin/locations/:id`).put(locationsAdmin.update);
  app.route(`/api/v1/admin/locations/:id`).delete(locationsAdmin.destroy);

  app.route("/api/v1/admin/rides").post(ridesAdmin.create);
  app.route("/api/v1/admin/rides").get(ridesAdmin.index);
  app.route(`/api/v1/admin/rides/:id`).get(ridesAdmin.show);
  app.route(`/api/v1/admin/rides/:id`).put(ridesAdmin.update);
  app.route(`/api/v1/admin/rides/:id`).delete(ridesAdmin.destroy);

  // CLIENT ROUTES
  // /api/v1/client
  app.route("/api/v1/client/users").post(usersClient.create);
  app.route(`/api/v1/client/users/:id`).get(usersClient.show);
  app.route(`/api/v1/client/users/:id`).put(usersClient.update);

  app.route("/api/v1/client/screenings").post(screeningsClient.create);
  app.route("/api/v1/client/screenings").get(screeningsClient.index);
  app.route(`/api/v1/client/screenings/:id`).get(screeningsClient.show);
  app.route(`/api/v1/client/screenings/:id`).put(screeningsClient.update);

  app.route("/api/v1/client/locations").get(locationsClient.index);
  app.route(`/api/v1/client/locations/:id`).get(locationsClient.show);

  app.route("/api/v1/client/rides").post(ridesClient.create);
  app.route("/api/v1/client/rides").get(ridesClient.index);
  app.route(`/api/v1/client/rides/:id`).get(ridesClient.show);
};
