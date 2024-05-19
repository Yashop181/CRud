const express= require("express");
const app = express();
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const cors= require("cors");
app.use(cors());
dotenv.config()
const PORT=process.env.PORT || 8000;
const dbUrl = process.env.MONGO_DB
mongoose.connect(dbUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))
    const corsOptions = {
        origin: process.env.CORS_ORIGIN, 
        credentials: true,
        optionSuccessStatus: 200,
      };
    app.use(cors(corsOptions));
const stuController = require("./controllers/StuController");
app.use(express.json());

app.post("/datasave",  stuController.stuSave);

app.get("/studisplay" ,stuController.stuDisplay);

app.post("/stusearch", stuController.stuSearch);    

app.get("/studelete/:id", stuController.stuDelete);

app.get("/stuedit/:id" , stuController.stuEdit);
app.post("/editsave/:id", stuController.stuEditSave);

app.listen (PORT , ()=>{
    console.log(`Server is running in ${PORT}`);
})
