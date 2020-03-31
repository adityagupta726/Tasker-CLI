const service = require ("./services");
console.log("request has been send");
service.downloadFile("g-drive/img.jpeg ",downloaded);
function downloaded (imgPath){
    console.log("Img Downloaded to " + imgPath);
}
console.log("Waiting for response");