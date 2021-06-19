
const homeRouter        =require("./home");
const studentRouter     =require("./student")
module.exports=function router(app)
{
    app.use("/", homeRouter);
    app.use("/Student", studentRouter);
}