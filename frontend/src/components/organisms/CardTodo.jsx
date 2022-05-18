import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import React, { memo, useId, useCallback, useRef, useState, useEffect } from 'react'

import update from '@/adapters/todos/update'
import Card from '@/components/molecules/Card'
import { signout } from '@/redux/reducers/auth'
import deleteTodo from '@/adapters/todos/delete'
import LoadIcon from '@/components/atoms/icons/LoadIcon'
import CopyIcon from '@/components/atoms/icons/CopyIcon'
import WarningIcon from '@/components/atoms/icons/WarningIcon'
import CopyIconError from '@/components/atoms/icons/CopyIconError'
import CopyIconSuccess from '@/components/atoms/icons/CopyIconSuccess'

const CardTodo = ({ todo, todoId, onCopy, onDelete, onUpdate }) => {
    const id = useId()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [todoUpdateValue, setTodoUpdateValue] = useState(todo)
    const [isSuccessToCopy, setIsSuccessToCopy] = useState(null)
    const [isReadyToChange, setIsReadyToChange] = useState(false)
    const [isConfirmedToDelete, setIsConfirmedToDelete] = useState(false)

    const textAreaRef = useRef(null)
    const debounceUpdateFunc = useRef(null)
    const isSupportUseClipboardApi = useRef(!!navigator.clipboard)

    const handleSetReady = useCallback(() => setIsReadyToChange(true), [setIsReadyToChange])
    const handleConfirmation = useCallback(() => setIsConfirmedToDelete(true), [setIsConfirmedToDelete])
    
    const handleDelete = useCallback(() => {
        setLoading(false)

        deleteTodo(todoId, token)
            .then(() => {
                if(onDelete instanceof Function) onDelete()
                setError('')
            })
            .catch(er => {
                if(er.code === 401) return dispatch(signout())
                setError(er.message)
            })
            .finally(() => setLoading(false))

    }, [todoId, token, onDelete, setLoading, setError, dispatch])

    const handleChange = useCallback(e => {
        setTodoUpdateValue(e.target.value)

        if(debounceUpdateFunc.current) clearTimeout(debounceUpdateFunc.current)
        debounceUpdateFunc.current = setTimeout(() => {
            if(!e.target.value.trim()) return setError('Value is required.')

            setLoading(true)

            update({ todo: e.target.value }, todoId, token)
                .then(() => {
                    if(onUpdate instanceof Function) onUpdate()
                    setError('')
                })
                .catch(er => {
                    if(er.code === 401) return dispatch(signout())
                    setError(er.message)
                })
                .finally(() => setLoading(false))
        }, 1000);

    }, [setTodoUpdateValue, todoId, token, onUpdate, debounceUpdateFunc, setError, setLoading])

    const handleCopy = useCallback(async () => {

        try {
            await navigator.clipboard.writeText(todoUpdateValue)
            if(onCopy instanceof Function) onCopy(todoUpdateValue)
            setIsSuccessToCopy(true)
        } catch(er) {
            console.error(er.message)
            setIsSuccessToCopy(false)
        }

    }, [todoUpdateValue])

    useEffect(() => {

        const handleSetUnready = (e) => {
            if(e.target.id === id) return
            return setIsReadyToChange(false)
        }

        window.addEventListener('click', handleSetUnready)
        return () => window.removeEventListener('click', handleSetUnready)

    }, [id, setIsReadyToChange])

    useEffect(() => {

        isReadyToChange 
            && textAreaRef?.current 
                && textAreaRef.current?.focus()

    }, [isReadyToChange, textAreaRef])

    return (
        <div 
            className={
                clsx(
                    isReadyToChange 
                        ? 'scale-100' 
                        : 'scale-95',
                    'transition-transform duration-200 w-12/12 sm:w-6/12 xl:w-4/12 p-2'
                )
            }
        >
            <Card className={isReadyToChange ? 'shadow-2xl' : ''}>
                <Card.Body className="relative">
                    {
                        loading && <LoadIcon className="absolute -mt-3 -mr-3 top-0 right-0 text-gray-500 w-[20px] h-[20px]" />
                    }
                    {
                        isReadyToChange
                            ? (
                                <textarea 
                                    id={id} 
                                    ref={textAreaRef}
                                    value={todoUpdateValue} 
                                    onChange={handleChange} 
                                    className='w-full outline-none min-h-[100px] resize-none' 
                                />
                            )
                            : (
                                <p className='min-h-[100px]' onDoubleClick={handleSetReady}>{ todoUpdateValue }</p>
                            )
                    }
                    {
                        error && <p className="text-red-600 mt-5 text-center">{ error }</p>
                    }
                </Card.Body>
                <Card.Footer>
                    <div className="flex justify-end flex-col lg:flex-row">
                        {
                            isSupportUseClipboardApi.current 
                                && (
                                    <button 
                                        className={
                                            clsx(
                                                isSuccessToCopy === null && 'bg-dark-green', 
                                                isSuccessToCopy === false && 'bg-red-600',
                                                isSuccessToCopy === true && 'bg-green-600',
                                                'w-full flex flex-row items-center justify-start btn-primary mr-0 mb-2 lg:mb-0 lg:mr-2'
                                            )
                                        } 
                                        onClick={handleCopy}>
                                            { isSuccessToCopy === null && <CopyIcon className="mr-2" /> }
                                            { isSuccessToCopy === false && <CopyIconError className="mr-2" /> }
                                            { isSuccessToCopy === true && <CopyIconSuccess className="mr-2" /> }
                                        Copy
                                    </button>
                                )
                        }
                        {
                            isConfirmedToDelete
                                ? (
                                    <button className='flex flex-row items-center justify-start bg-orange-600 btn-primary w-full' onClick={handleDelete}>
                                        <WarningIcon className="mr-2" />
                                        Click to confirm
                                    </button>
                                )
                                : (
                                    <button className='flex flex-row items-center justify-start bg-red-600 btn-primary w-full' onClick={handleConfirmation}>
                                        <WarningIcon className="mr-2" />
                                        Delete
                                    </button>
                                )
                        }
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default memo(CardTodo)
