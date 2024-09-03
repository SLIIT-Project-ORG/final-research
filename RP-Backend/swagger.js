const swaggerAutogen = require("swagger-autogen")();

// Path to your routes directory
const userRoutes = require("./routes/UserRoute");

const routesList = [userRoutes];

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"]; // Array of path to the entry points of your app

const swaggerOptions = {
  info: {
    version: "1.0.0",
    title: "RP API",
    description: "Research Project API documentation",
  },
  host: "localhost:8001", // Your API host
  schemes: ["http"], // Your API protocol
  tags: [
    
  ],
};

swaggerAutogen(outputFile, endpointsFiles, swaggerOptions,routesList);
