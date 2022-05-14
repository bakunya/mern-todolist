import axios from 'axios'
import { BASEURL_API } from '@/config'

const update = async (dataToUpdate, id, token, maxTrying = 3, customHeaders = {}) => {
    let response, er, attempt = 0

    while (attempt < maxTrying) {
        try {
            const data = await axios.put(
                `${BASEURL_API}/todos/${id}`, 
                dataToUpdate,
                { 
                    headers: {
                        auth: `Bearer ${token}`,
                        ...customHeaders
                    }
                }
            )
            if(data.status > 201) throw Error(data.statusText)
            response = data.data
            attempt = 4
        } catch(err) {
            attempt += 1
            if(err.response?.message) er = Error(err.response?.message)
            if(err.request) er = Error(err.request)
            er = Error(err.message)
            if(err.response.status === 401) {
                attempt = 4
                er.code = err.response.status
            }
        }
    }

    if(er) return Promise.reject(er)
    return Promise.resolve(response)
}

export default update