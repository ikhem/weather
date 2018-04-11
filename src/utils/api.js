import axios from 'axios';
import handleErrors from './helpers'

// NOTES: The token would not be sent in this way. 
// This implementation is only done this way for testing purposes!!!!

const baseURL = `https://iostest.bixly.com/`

export default {
    login: (user) => {
        let url     = baseURL + `api-token-auth/`
        let headers = { 'Content-Type': 'multipart/form-data' } 

        return axios({
            method: 'post',
            url: url,
            data: user,
            config: { headers }
        })
        .then(res => { return res.data })
        .catch(err => { handleErrors(err) })
    },
    getInbox: (user) => {
        let url     = baseURL + `messages/`
        let headers = {'Authorization': 'token ' + user.token }

        return axios.request('GET', {url, headers})
            .then(response => {
                return response.data;
            })
            .catch(err => {
                handleErrors(err)
            })
    },
    getOutbox: (user) => {
        let url     = baseURL + `messages/sent/`
        let headers = {'Authorization': 'token ' + user.token }

        return axios.request('GET', {url, headers})
            .then(response => {
                return response.data;
            })
            .catch(err => {
                handleErrors(err)
            })
    },
    postMessages: (message, user) => {
        let url     = baseURL + `messages/`
        let headers = {'Authorization': 'token ' + user.token, 
                       'Content-Type': 'application/x-www-form-urlencoded'
                      }

        console.log("MESSAGE: ", message)

        let options = {
            method: 'post',
            url: url,
            data: message,
            config: {headers}
        }

        return axios(options)
         .then(res => {return res})
         .catch(err => handleErrors(err))
    },
    deleteMessages: (id, user) => {
        console.log('id', id)
        console.log('user', user)
    }

}

