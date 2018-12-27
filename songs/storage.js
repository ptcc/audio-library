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
    .then(data => R.pluck("Key", (data && data.Contents) || []));

const stream = file =>
  s3.getObject({ Bucket: S3_BUCKET, Key: file }).createReadStream();

module.exports = { list, stream };
