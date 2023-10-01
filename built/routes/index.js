"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// users controllers
const usersClient = require("./../controllers/api/v1/client/users/index");
const usersAdmin = require("./../controllers/api/v1/admin/users/index");
exports.routes = (app) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQW9CO0FBQ3BCLDBFQUEwRTtBQUMxRSx3RUFBd0U7QUFFeEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMifQ==