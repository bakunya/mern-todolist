import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const useGuess = (path = '/', options = { replace: true }) => {
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    useEffect(() => {

        if(token) navigate(path, options)

    }, [navigate, token, path, options])
}

export default useGuess