import axios from 'axios'
import handleErrors from './helpers'

const baseURL = `https://iostest.bixly.com/`

export default {
	login: (user) => {
		let url     = baseURL + `api-token-auth/`
		let headers = { 'Content-Type': 'multipart/form-data' } 
		let options = {
				method: 'post',
				data: user,
				config: headers,
				url,
		}

		return axios(options)
			.then(res => { return res.data })
			.catch(err => { handleErrors(err) })
	},
	getInbox: (user) => {
		let url     = baseURL + `messages/`
		let headers = { 'Authorization': 'token ' + user.token }
		let options = {
				method: 'get',
				url,
				headers
		}

		return axios(options)
			.then(res => { return res.data })
			.catch(err => { handleErrors(err) })
	},
	getOutbox: (user) => {
		let url     = baseURL + `messages/sent/`
		let headers = { 'Authorization': 'token ' + user.token }
		let options = {
				method: 'get',
				url,
				headers
		}

		return axios(options)
			.then(res => { return res.data })
			.catch(err => { handleErrors(err) })
	},
	postMessages: (message, user) => {
		let url     = baseURL + `messages/`
		let headers = { 'Authorization': 'token ' + user.token }
		let form_data = new FormData();

		// encode json message into form data
		for (let key in message) {
				form_data.append(key, message[key])
		}

		let options = {
				method: 'post',
				url: url,
				data: form_data,
				headers: headers
		}

		return axios(options)
			.then(res => { return res.data })
			.catch(err => handleErrors(err))
	},
	deleteMessages: (id, user) => {
		let url     = baseURL + `messages/${id}/`
		let headers = { 'Authorization': 'token' + user.token } 
		let options = {
				method: 'delete',
				url: url,
				headers: headers
		}

		return axios.request(options)
			.then(res => { return res.data })
			.catch(err => { handleErrors(err) })
	}
}   