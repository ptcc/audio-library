const { stream } = require("./storage");

// streams the audio file from storage
const audioRequestHandler = (req, res) => {
  const downloadStream = stream(req.params.file);
  downloadStream.on("error", function(e) {
    console.error(e);
    res.status(404).send("Not Found");
  });
  downloadStream.on("httpHeaders", function(statusCode, headers, resp) {
    res.set({
      "Content-Type": headers["content-type"]
    });
  });

  // Pipe download stream to response
  console.log(Date())
  const responseStream = downloadStream.pipe(res);
  responseStream.on("close", ()=>{
    console.log(Date(),"responseStream closed");
    downloadStream.unpipe(res);
    downloadStream.destroy();})
  downloadStream.on("close", ()=>console.log("downloadStream closed"))
  //downloadStream.on('data', chunk => console.log('sending '+chunk.length));
  downloadStream.on('error', error => console.log('*error* '+error));
  downloadStream.on('end', () => console.log('downloadStream ended'));
};

module.exports = { audioRequestHandler };