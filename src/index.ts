import express,{Request,Response} from "express";

const app = express();
const port = process.env.PORT || 8000;


const requestHandler = (req:Request,res:Response) =>{
    res.status(200).json({
        msg:"Working Fine",
        method:req.method,
        url:req.url,
        port
    })
}

app.use("/",requestHandler);

app.listen(port,() => {
    console.info(`Your app is listening a http://localhost: ${port}`);
})