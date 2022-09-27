const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
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
// app.use(cors({
//     origin: process.env.PORT,
// }));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);
app.use("/api/project", projectRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL,
            {useNewUrlParser: true,
            useUnifiedTopology: true,
        useNewUrlParser: true})
        .then(() => {
            console.log("CONNECTED TO THE MONGO DB");
        })
        .catch((err) => {
            console.log(err);
            mongoose.disconnect(() => {
                console.log("DISCONNECTED FROM MONGO DB");
            });
        })
};



app.listen(process.env.PORT || 8000, () => {
    connect();
    console.log("MONGO_URL", process.env.MONGO_URL);
    console.log("PASSCODE", process.env.PASSCODE);
    console.log(`LISTENING ON PORT ${process.env.PORT}`);
})