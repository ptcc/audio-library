# audio library API

This API will allow you to retrieve a list of the available songs at the url `/songs` (stored in an s3 bucket), from there you will get urls for each of the songs, and by following those links (that look like `/songs/:song`) you will see some metadata fetched from https://www.songsterr.com
aditionally you get an audio link from where you can get a stream to the audio contents of that song (`/song/:song/audio`).

## how to run this
- clone the repo
- install nodejs and npm
- run `npm install`
- run `node .`

## next improvements
- add upload capabilities
- add unit tests

