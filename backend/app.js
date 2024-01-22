const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const todosRouter = require("./routes/todos");

var cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json({ encoded: false }));

app.use(todosRouter);

mongoose
  .connect(
    "mongodb+srv://sanasupraja2727:Saana@cluster0.fncr46g.mongodb.net/todos?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });


 