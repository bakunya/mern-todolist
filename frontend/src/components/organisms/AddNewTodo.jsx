import { CSSTransition } from 'react-transition-group'
import React, { useCallback, useEffect, useState } from 'react'

import AddIcon from '@/components/atoms/icons/AddIcon'
import { useSelector } from 'react-redux'

const AddNewTodo = ({ onAdd, onClick, onShowModal, onCloseModal }) => {
    const [todo, setTodo] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showAddTodo, setShowAddTodo] = useState(false)
    const isErrorCreate = useSelector(state => state.todos.errorCreate)
    const isLoadingCreate = useSelector(state => state.todos.loadingCreate)

    const handleShowModal = useCallback(async () => {
        setShowModal(true)
        document.body.classList.add('overflow-hidden')

        if(onClick instanceof Function) onClick()
        if(onShowModal instanceof Function) onShowModal()
    }, [onShowModal, onClick])

    const handleCloseModal = useCallback(async (e) => {
        if(isLoadingCreate) return
        if(e.target.id !== 'backdrop') return

        setShowModal(false)
        document.body.classList.remove('overflow-hidden')
        
        if(onCloseModal instanceof Function) onCloseModal()
    }, [onCloseModal, isLoadingCreate])

    const handleShowAddTodoToggle = useCallback(val => () => setShowAddTodo(val), [setShowAddTodo])

    const handleAddTodo = useCallback(e => {

        if(onAdd instanceof Function) onAdd(todo)

    }, [onAdd, todo])

    const handleChangeTodo = useCallback(e => setTodo(e.target.value), [setTodo])

    useEffect(() => {

        document.addEventListener('click', handleCloseModal)

        return () => document.removeEventListener('click', handleCloseModal)

    }, [handleCloseModal])

    return (
        <>
            <button 
                className='btn-primary border-2 border-dark-green transition-all focus:-translate-y-1 active:-translate-y-1 hover:-translate-y-1'
                onClick={handleShowModal}
            >
                <AddIcon />
            </button>

            <CSSTransition
                in={showModal}
                timeout={300}
                classNames="backdrop-transition"
                unmountOnExit
                onEnter={handleShowAddTodoToggle(true)}
                onExit={handleShowAddTodoToggle(false)}
            >
                <div className="backdrop" id="backdrop">
                    <CSSTransition
                        in={showAddTodo}
                        timeout={300}
                        classNames="add-todo-container"
                        onExit={handleShowAddTodoToggle(false)}
                    >
                        <div className="new-todo">
                            <textarea onChange={handleChangeTodo} placeholder='Add new todo ....' className='w-full border border-black p-3 resize-none outline-none rounded-xl'></textarea>
                            {
                                isErrorCreate && <p className="text-red-600 mt-5 text-center">{ isErrorCreate }</p>
                            }
                            <button disabled={isLoadingCreate} className='btn-primary w-full mt-5 rounded-xl' onClick={handleAddTodo}>
                                {
                                    isLoadingCreate 
                                        ? 'Loading ....' 
                                        : 'Save'
                                }
                            </button>
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>
        </>
    )
}

export default AddNewTodo