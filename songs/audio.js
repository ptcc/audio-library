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
  downloadStream.pipe(res);
};

module.exports = { audioRequestHandler };