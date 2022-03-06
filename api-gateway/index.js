const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000; 
const axios = require('axios');

const service1BaseUrl = process.env.service_1_service_name ? 'http://'+process.env[process.env.service_1_service_name.toUpperCase()+'_SERVICE_HOST']: "http://localhost:5001"
const service2BaseUrl = process.env.service_2_service_name ? 'http://'+process.env[process.env.service_2_service_name.toUpperCase()+'_SERVICE_HOST']: "http://localhost:5002"

console.log('service1baseUrl1',service1BaseUrl);
console.log('service1baseUrl2',service2BaseUrl);

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    console.log(`api gateway `);
    res.send({
        message:"Hi from api gateway"
    });      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/service/1',async (req, res) => {        //get requests to the root ("/") will route here
    try{
        console.log(`api gateway contacting service 1`);
        console.log(`calling service 1 from api-gateway`,service1BaseUrl);
        const service1Response = await axios.get(service1BaseUrl);
        console.log(`service 1 response1`, service1Response.data);
        res.send(service1Response.data);      //server responds by sending the index.html file to the client's browser
                                                
    }
    catch(e){
        console.log('error while accessing service 1',e);
        res.send({
            "Error":"error while contacting service 1",
            
        },500 )
    }
});

app.get('/service/1/put-cpu-load',async (req, res) => {        //get requests to the root ("/") will route here
    try{
        console.log(`api gateway contacting service 1`);
        console.log(`calling service 1 from api-gateway`,service1BaseUrl);
        const service1Response = await axios.get(service1BaseUrl+"/put-cpu-load");
        console.log(`service 1 response1`, service1Response.data);
        res.send(service1Response.data);      //server responds by sending the index.html file to the client's browser
                                                
    }
    catch(e){
        console.log('error while accessing service 1',e);
        res.send({
            "Error":"error while contacting service 1",
            
        },500 )
    }
});

app.get('/service/2/put-cpu-load',async (req, res) => {        //get requests to the root ("/") will route here
    try{
        console.log(`api gateway contacting service 2`);
        console.log(`calling service 2 from api-gateway`,service2BaseUrl);
        const service2Response = await axios.get(service2BaseUrl+"/put-cpu-load");
        console.log(`service 1 response1`, service2Response.data);
        res.send(service2Response.data);      //server responds by sending the index.html file to the client's browser
                                                
    }
    catch(e){
        console.log('error while accessing service 2',e);
        res.send({
            "Error":"error while contacting service 2",
            
        },500 )
    }
});

app.get('/service/2/flip-health-check',async (req, res) => {        //get requests to the root ("/") will route here
    try{
        console.log(`api gateway contacting service 2`);
        console.log(`calling service 2 from api-gateway`,service2BaseUrl);
        const service2Response = await axios.get(service2BaseUrl+"/flip-health-check");
        console.log(`service 2 response1`, service2Response.data);
        res.send(service2Response.data);      //server responds by sending the index.html file to the client's browser
                                                
    }
    catch(e){
        console.log('error while accessing service 2',e);
        res.send({
            "Error":"error while contacting service 2",
            
        },500 )
    }
});
app.get('/service/2',async (req, res) => {        //get requests to the root ("/") will route here
    try{
        console.log(`api gateway contacting service 2`);
        console.log(`calling service 2 from api-gateway`);
        const service2Response = await axios.get(service2BaseUrl);
        console.log(`service 2 response`, service2Response.data);
        res.send(service2Response.data);      //server responds by sending the index.html file to the client's browser
                                                
    }
    catch(e){
        console.log('error while accessing service 2',e);
        res.send({
            "Error":"error while contacting service 2",
            
        },500 )
    }
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Api gateway started on port ${port} all process env ${ JSON.stringify(process.env.NODE_ENV)}`); 
});