import { useDispatch, useSelector } from 'react-redux'
import React, { memo, useCallback } from 'react'

import { signout } from '@/redux/reducers/auth'
import AddNewTodo from '@/components/organisms/AddNewTodo'
import RefreshIcon from '@/components/atoms/icons/RefreshIcon'
import OpenDoorIcon from '@/components/atoms/icons/OpenDoorIcon'
import { setState, types } from '@/redux/reducers/todos'
import createTodo from '@/adapters/todos/create'

const DashboardHeader = ({ onRefresh }) => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const username = useSelector(state => state.auth.username)
    
    const handleSignOut = useCallback(() => dispatch(signout()), [dispatch])
    const handleAddTodo = useCallback((val) => {
        if(!val.trim()) return dispatch(setState({
            type: types.errorCreate,
            value: 'Value required!'
        }))

        dispatch(setState({
            type: types.loadingCreate,
            value: true
        }))

        createTodo(val, token)
            .then(() => onRefresh())
            .catch(er => {
                if(er.code === 401) return handleSignOut()
                return dispatch(setState({
                    type: er.message,
                    value: 'Value required!'
                }))
            })
            .finally(() => dispatch(setState({
                type: types.loadingCreate,
                value: false
            })))

    }, [token, handleSignOut, onRefresh])


    return (
        <div className="sm:items-end flex justify-between sm:flex-row flex-col">
            <section>
                <h1 className="">Hi, {username}.</h1>
                <p className="text-gray-500 mt-2">What will you do today?</p>
            </section>
            <section className='ml-auto sm:ml-0 mt-3 sm:mt-0'>
                <AddNewTodo onAdd={handleAddTodo} />
                <button 
                    onClick={onRefresh} 
                    className='ml-2 text-dark-green btn-primary bg-light-primary border-2 border-dark-green transition-all focus:-translate-y-1 active:-translate-y-1 hover:-translate-y-1'
                >
                    <RefreshIcon />
                </button>
                <button 
                    onClick={handleSignOut}
                    className='ml-2 text-dark-green btn-primary bg-light-primary border-2 border-dark-green transition-all focus:-translate-y-1 active:-translate-y-1 hover:-translate-y-1' 
                >
                    <OpenDoorIcon />
                </button>
            </section>
        </div>
    )
}

export default memo(DashboardHeader)