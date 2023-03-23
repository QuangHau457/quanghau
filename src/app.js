import express from "express";
import router from "./routers/product.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();



app.use(express.json());
app.use("/api", router);




app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
