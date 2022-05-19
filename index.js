const express = require("express");
const rateLimit = require("express-rate-limit");
const app =  express();
const indexRouter  = require("./routes/index");
const dataRouter = require("./routes/data");
const port =  3000;

const seconds_limiter = rateLimit({
    windowMs: 20 * 1000, // 20 seconds duration in miliseconds
    max: 2, // Limit each IP to use 
    statusCode: 429,
    message: "You have exceeded 2 requests in 20 seconds limit",
    headers: true,
})

const month_limiter = rateLimit({
    windowMs: 20 * 24 * 60 * 60 * 1000, // 1 month (considered to be 20 days) duration in miliseconds
    max: 100, // Limit each IP to use
    statusCode: 429, 
    message: "You have exceeded 100 requests in 20 days limit",
    Headers: true,
})


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Rate Limit!");
});

app.use("/api", month_limiter, indexRouter);

app.use("/api/data", seconds_limiter, dataRouter);

app.listen(port, () => {
    console.log(`App listerning at http://localhost:${port}`)
}) 