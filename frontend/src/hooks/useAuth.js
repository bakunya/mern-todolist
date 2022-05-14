import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setState, types } from '@/redux/reducers/todos'


const useAuth = (path = '/signin', options = { replace: true }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)

    useEffect(() => {

        if(!token) {
            navigate(path, options)
            
            // clean all data todos on global state
            setTimeout(() => {
                dispatch(setState({
                    type: types.todos,
                    value: [],
                }))
            }, 500);
        }

    }, [navigate, token, path, options, dispatch])
}

export default useAuth