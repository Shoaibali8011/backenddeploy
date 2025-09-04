const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);

const PORT = 3000;

// Public folder ko static bana do
app.use(express.static(path.join(__dirname, "../Public")));

// Index.html serve karo
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public", "index.html"));
});

http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// socket.io is wokring

const io=require("socket.io")(http)
io.on("connection",(socket)=>{
    console.log("Connected...");
    socket.on('message',(msg)=>{
    socket.broadcast.emit('message',msg )
        
    })
    
})