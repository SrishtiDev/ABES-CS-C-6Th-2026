const http=require('http');
const fs= require('fs').promises;
const PORT=3000;
const Server=http.createServer(async (req,res)=>{

  if(req.url==='/msg' && req.method==='GET'){  
    res.setHeader('Content-Type','application/json');

    res.end(JSON.stringify({message:'Hello, this is a message from the server!'}));
  }else if (req.url === "/jsondata" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    const student={
        "name":"John Doe",
        "age":20,
        "major":"Computer Science"  
    }

    res.end(
      JSON.stringify({ message: student }),
    );
  } else {
    res.setHeader("Content-Type", "text/html");

    res.end("<h2>No End Point</h2>");
  }
});
Server.listen(PORT,()=>{

    console.log('Server is running on '+PORT);
})