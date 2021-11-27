
const jwt = require('jsonwebtoken')
const resFormat = require("../Utils/format");


// To Check Admin User Token
module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1]
		const decodedToken = jwt.verify(token, process.env.secret)
		console.log(decodedToken);
		if (!decodedToken || !decodedToken.id) {
			res.status(401).send(resFormat.rError("Invalid Token"))
		} else if (new Date(decodedToken.iat) > new Date()) {
			res.status(401).send(resFormat.rError("Expired Token"))
		} else {
			req.userData = decodedToken
			next()
		}
	} catch (error) {
		return res.status(401).json({
			message: 'Authentication failed',
			error: error.message,
		})
	}
}