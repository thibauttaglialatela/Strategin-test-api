const express = require("express");
const app = express();
require("dotenv").config();

const userRoutes = require('./routes/user');

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection à MongoDB réussie !"))
  .catch(() => console.log("La connection à MongoDB a échoué !"));

/* app.use("/api/strategin", userRoute); */
app.listen(3000, () => {
  console.log("Server has started!");
});

app.use('/api/strategin', userRoutes);
