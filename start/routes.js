"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Database = use("Database");

Route.get("/", async () => {
  return "Hi welcome to AdonisJS";
});

Route.get("/exercise", () => {
  return "Sorry guys"
});

Route.get("/aboutme", () => {
  return {
    greeting: "Hi! I guess it's better talk about me in a json, sup? :p",
    aboutMe: "I call myself an digital highlander, i past last years walking alone here and doing nasty tech stuff on my house",
    email: "leonardociberxon@gmail.com",
    linkedin: "https://www.linkedin.com/in/leonardo-araujo-pimentel-26619972/",
    mobileNumber: "+5571988889706",
    reminder: "If you seeing this on your web browser, ya you doing right"
  };
});

Route.get("/posts", async () => {
  return await Database.table("blog_posts").select("*");
});

Route.get("/users", async () => {
  return await Database.table("users").select("*");
});

Route.post("/register/submit", "UserController.create");

Route.post("/login", async () => {
  return await console.log(body);
});
