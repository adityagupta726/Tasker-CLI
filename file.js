const service = require ("./services");
console.log("request has been send");
service.downloadFile("g-drive/img.jpeg ",downloaded);
function downloaded (imgPath){
    console.log("Img Downloaded to " + imgPath);
}
console.log("Waiting for response");


console.log("request has been send");
service.compressFile("imgPath",compressed);
function compressed(cImgPath){
    console.log("Img compressed to " + cImgPath);
}
console.log("Waiting for response");


console.log("request has been send");
service.uploadFile("cImgPath",uploaded);
function uploaded(upImgPath){
    console.log("Img uploaded to " + upImgPath);
}
console.log("Waiting for response");