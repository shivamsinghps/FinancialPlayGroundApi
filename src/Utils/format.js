var helper = {}

//function to format data before sending it to frontend
helper.rError = (msg) => {
	return { status: 'error', data: msg }
}

helper.rSuccess = (data = null) => {
	let res = { status: 'success' }
	if (data) {
		res.data = data
	}
	return res
}

helper.SuccessMsg = (data, userFriendlyMessage) => {
	if (data == undefined) {
		data = []
	}
	return {
		responseType: 200,
		message: 'successful',
		data,
		responseType: 'success',
		userFriendlyMessage,
	}
}

helper.ErrorMsg = (responseType, message, userFriendlyMessage, data) => {
	if (data == undefined) {
		data = []
	}
	return {
		responseType,
		message,
		data,
		responseType: 'error',
		userFriendlyMessage,
	}
}

module.exports = helper