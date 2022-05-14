import { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import readAll from "@/adapters/todos/readAll"
import { signout } from "@/redux/reducers/auth"
import { setState, types } from "@/redux/reducers/todos"

const useGetAllTodos = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const timeoutFunc = useRef()

    const getApi = useCallback(() => {

        dispatch(setState({
            value: true,
            type: types.loadingGetAll
        }))

        readAll(token)
            .then(res => dispatch(setState({
                value: res,
                type: types.todos
            })))
            .catch(er => {
                // if unauthorize, will signout
                if(er.code === 401) return dispatch(signout())

                return dispatch(setState({
                    value: er.message,
                    type: types.setErrorGetAll
                }))
            })
            .finally(() => dispatch(setState({
                value: false,
                type: types.loadingGetAll
            })))

    }, [token, dispatch])

    useEffect(() => {
        if(timeoutFunc.current) clearTimeout(timeoutFunc.current)

        // this function just running one time
        timeoutFunc.current = setTimeout(() => {
            getApi()
        }, 300);

        return () => {
            if(timeoutFunc.current) clearTimeout(timeoutFunc.current)
        }

    }, [token])

    return getApi
}

export default useGetAllTodos