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

Route.get("/exercise", () => {
  return {
    "popular": {
      "velocidade_maxima": {"min": "180", "max": "200"}, 
      "velocidade_minima": {"min": "110", "max": "130"}, 
      "derrapagem": {"min": "3", "max": "4"}
    },
    "sport": {
      "velocidade_maxima": {"min": "195", "max": "215"}, 
      "velocidade_minima": {"min": "125", "max": "145"}, 
      "derrapagem": {"min": "2", "max": "3"}
    },
    "supersport": {
      "velocidade_maxima": {"min": "210", "max": "230"}, 
      "velocidade_minima": {"min": "140", "max": "160"}, 
      "derrapagem": {"min": "1", "max": "1.75"}
    },
    
  };
});
Route.get("/olamundo", () => {
  return {
    ["ola mundo", "ola alpha edtech"]
  };
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

Route.post("/register/submit", "UserController.store");
