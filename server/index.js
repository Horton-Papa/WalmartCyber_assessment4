const express = require("express");
const cors = require("cors");

/* * * * * * * * * * 
*    Middleware    *
* * * * * * * * *  */
const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/pet/:type?", controller.getPetName);
app.get("/api/number", controller.getNumber);
app.post("/api/feedback", controller.postFeedback);

app.listen(4000, () => console.log("Server running on 4000"));