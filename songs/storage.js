const AWS = require("aws-sdk");
const R = require("ramda");
const { S3_ACCESS_KEY, S3_SECRET, S3_BUCKET } = process.env;

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET
  }
});

const list = () =>
  s3
    .listObjectsV2({ Bucket: S3_BUCKET, Delimiter: "/" })
    .promise()
    .then(R.propOr([], "Contents"))
    .then(R.pluck("Key"));

const stream = file =>{
  const req=s3.getObject({ Bucket: S3_BUCKET, Key: file });
  req.on('error',err=>console.log('*error*', err));
  return req.createReadStream();
}

module.exports = { list, stream };
