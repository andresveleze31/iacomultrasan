const express =  require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const embargoRoutes = require("./routes/embargoRoutes.js");
const connectDB = require("./db/connectDB.js");

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Aquí debes poner la URL de tu frontend
}));

dotenv.config();

app.use(fileUpload());
app.use(express.json());
app.use(cookieParser());

app.use("/api/embargo", embargoRoutes)

app.listen(5000, () => {
  connectDB();
  console.log('Server started on http://localhost:5000');
});
