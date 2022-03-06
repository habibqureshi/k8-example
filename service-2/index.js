const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000; 




app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    console.log("hi from service 2");
    res.send({
        message:"Hi from service 2"
    });      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

let return200Health=true
app.get('/flip-health-check', (req, res) => {       
    return200Health=!return200Health

    console.log("flip-health-check");
    res.send({
        message:"flip-health-check"
    });      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.get('/health-check', (req, res) => {      
    console.log("checking health for service 2");

        return200Health?res.send({
            message:"health check passed"
        }):res.send(500,{message:"not healthy"}) 
    });
app.get('/put-cpu-load',(req,res)=>{
    const size = 1000_0000_0
    let count = 1
    for(let i=0;i<size;i++){
        count = count+i;
    }
    res.send({
        count
    })
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`service 1 started on port ${port} all process env ${ JSON.stringify(process.env.NODE_ENV)}`); 
});