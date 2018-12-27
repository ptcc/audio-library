# audio library API

This API will allow you to retrieve a list of the available songs at the url `/songs` (stored in an s3 bucket), from there you will get urls for each of the songs, and by following those links (that look like `/songs/:song`) you will see some metadata fetched from https://www.songsterr.com
aditionally you get an audio link from where you can get a stream to the audio contents of that song (`/song/:song/audio`).

The s3 bucket settings are stored in the .env file, you can change to a different one there.

The song metadata search api url is also stored in the same .env file, and should in theory work with another one that expects the artist and song name to be appended at the end, and returns a json array with objects representing the results metadata.

## how to run this
- clone the repo
- install nodejs and npm
- run `npm install`
- run `node .`

## next improvements
- add upload capabilities
- add local cache for metadata API
- add unit tests
- dockerize
