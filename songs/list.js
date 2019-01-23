const { list } = require("./storage");
const R = require("ramda");

// list route - gets all files from storage and returns the ones ending with mp3 extension
const listRouteHandler = async (req, res) => {
  try {
    const files = await list();
    const songAPIUrls = files
        .filter(R.endsWith(".mp3"))
        .map(R.concat(`http://${req.headers.host}${req.baseUrl}/`))
    res.send(songAPIUrls);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = { listRouteHandler };
