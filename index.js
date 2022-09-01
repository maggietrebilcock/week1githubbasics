let myhttp = require("http");

let myserver = myhttp.createServer(

  function( myrequest, myresponse ) {
    console.log(myrequest.url);
    let mytext;
    if (myrequest.url === "/hey") {
      mytext = "Hi there!";
    } else {
      mytext ="I don't know you.";
    }
    myresponse.writeHead(200, {"Content-Type": "text/plain"});
    myresponse.end ("Hello everyone!\n");
  }
  
);

myserver.listen(8080, "0.0.0.0");
console.log("server has started");