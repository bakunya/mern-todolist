import axios from 'axios'
import { BASEURL_API } from '@/config'

const signin = async ({ username = '', password = '' }) => {
    try {
        const response = await axios.post(`${BASEURL_API}/auth/signin`, { 
            username,
            password,
        })
        if(response.status !== 200) throw Error(response.statusText)
        return Promise.resolve(response.data)
    } catch(er) {
        if (er.response) return Promise.reject(Error(er.response.data.message))
        if (er.request) return Promise.reject(Error(er.request))
        return Promise.reject(Error(er.message))
    }
}

export default signin