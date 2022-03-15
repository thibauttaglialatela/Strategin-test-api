const express = require("express");
const app = express();
const user = require('./user');

const userRoute = require('./routes/user');










app.use('/api/strategin', userRoute);
app.listen(3000, () => {
  console.log("Server has started!");
});
