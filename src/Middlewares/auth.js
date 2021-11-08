
const jwt = require('jsonwebtoken')

// To Check Admin User Token
module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1]
		const decodedToken = jwt.verify(token, process.env.secret)
		if (!decodedToken || !decodedToken.clientId) {
			res.status(401).send(resFormat.rError("Invalid Token"))
		} else if (new Date(decodedToken.iat) > new Date()) {
			res.status(401).send(resFormat.rError("Expired Token"))
		} else {
			req.clientData = decodedToken
			next()
		}
	} catch (error) {
		return res.status(401).json({
			message: 'Authentication failed',
			error: error.message,
		})
	}
}