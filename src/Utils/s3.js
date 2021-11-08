const AWS = require('aws-sdk')
const bluebird = require('bluebird')
const uuid = require('uuid/v4')
const constants = require('../config/constants')

AWS.config.update({
	accessKeyId: constants.s3Details.awsKey,
	secretAccessKey: constants.s3Details.awsSecret,
})

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird)

// create S3 instanc
const s3 = new AWS.S3()

async function uploadReadableStream(stream, name, mime) {
	var params = {
		Bucket: constants.s3Details.bucketName,
		ContentType: mime,
		ACL: 'public-read',
		Key: `${uuid()}${name}`,
		Body: stream,
	}
	return s3.upload(params).promise()
}

async function uploadReadableDicomStream(stream) {
	var params = { Bucket: constants.s3DicomDetails.bucketName, ACL: 'public-read', Key: `${uuid()}.dcm`, Body: stream }
	return s3.upload(params).promise()
}

exports.uploadToAws = async (stream, name, mime, dicom = false) => {
	// if imagePublicId param is presented we should overwrite the image
	try {
		if (dicom === false) {
			const results = await uploadReadableStream(stream, name, mime)
			return results
		} else {
			const results = await uploadReadableDicomStream(stream)
			return results
		}
	} catch (error) {
		console.log('error', error)
	}
}