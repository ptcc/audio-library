const { SONGS_API_SEARCH } = process.env;
const axios = require("axios").default;
const R = require("ramda");

async function getMetadata(searchString) {
  const url = `${SONGS_API_SEARCH}${searchString}`;
  const { data } = await axios.get(url);
  const bestMatch = R.head(data);
  return bestMatch;
}

// searches metadata from external API and sends the best match to the client
const metadataRequestHandler = (req, res) => {
  const { file } = req.params;
  const searchString = file.replace(/\.mp3$/i, "");
  getMetadata(searchString)
    .then(
      R.assoc("audio", `http://${req.headers.host}${req.originalUrl}/audio`)
    )
    .then(bestMatch => res.send(bestMatch));
}

module.exports = { getMetadata, metadataRequestHandler };
