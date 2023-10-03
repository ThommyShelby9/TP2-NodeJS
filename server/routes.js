var HomeControllers = require("../Controllers/home._controller");

const Route = {
  routes: {},
  
  get(path, handler) {
    this.routes[path] = {
      method:"GET",
      handler
    };
  },

  post(path, handler) {
    this.routes[path] = {
      method:"POST",
      handler
    };
  },
};



Route.get("/", HomeControllers.index);
Route.post("/about", HomeControllers.store);



const router = (req, res) => {
  const { url, method} = req;

  const routed = Route.routes[req.url];

  if (!routed) {
    res.writeHead(404);
    res.end("404 Not Found");
    return;
  }

  if (method !== routed.method) {
    res.writeHead(405);
    res.end("405 Method Not Allowed");
    return;
  }

  routed.handler(req, res);
};

module.exports = router;



/* var homeController = require("../Controllers/home._controller")

const routes = {
  "/": {
    method: ["POST"],
    handler: homeController.index
  },
  "/about": {
    method: ["GET"],
    handler: (req, res) => {
        res.end("This is about page");
      },
  }
};

const router = (req, res) => {
  const { url, method } = req;
  const route = routes[url];
  if (!route) {
    res.writeHead(404);
    res.end("404 Not Found");
    return;
  }
  if(method!==route.method[0]){
    res.writeHead(405);
    res.end("405 Method Not Allowed");
    return;
  }
  route.handler(req, res); 
};

module.exports = router */
