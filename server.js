const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blog");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const contactRouter = require("./routes/contact");
const projectRouter = require("./routes/project");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);
app.use("/api/project", projectRouter);

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL,
            {useNewUrlParser: true,
            useUnifiedTopology: true})
        .then(() => {
            console.log("CONNECTED TO THE MONGO DB");
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
};


app.listen(process.env.PORT, () => {
    connect();
    console.log(`LISTENING ON PORT ${process.env.PORT}`);
})