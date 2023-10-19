const http = require("http");
const express = require("express");
const itemsRouter = require("./routes/items");

const app = express();
app.use(express.json());

//default URL to API
// app.use("/", function (req, res) {
//   res.send("Hello...");
// });

app.use("/", itemsRouter);
app.use("/items", itemsRouter);
app.use("/update",itemsRouter); 

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug("Server listening on port " + port);
