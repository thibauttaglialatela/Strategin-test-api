const express = require("express");
const app = express();
const userRoute = require("./routes/user");
require("dotenv").config();
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection à MongoDB réussie !"))
  .catch(() => console.log("La connection à MongoDB a échoué !"));


app.listen(3000, () => {
  console.log("Server has started!");
});

app.use('/api/strategin', userRoute);
