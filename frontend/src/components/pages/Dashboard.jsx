import { useSelector } from 'react-redux'
import React, { memo } from 'react'

import useAuth from '@/hooks/useAuth'
import useGetAllTodos from '@/hooks/useGetAllTodos'
import CardTodo from '@/components/organisms/CardTodo'
import DashboardHeader from '@/components/organisms/DashboardHeader'

const Dashboard = () => {
    useAuth()
    const revalidate = useGetAllTodos()
    const todos = useSelector(state => state.todos.todos)
    const isLoadingGetAll = useSelector(state => state.todos.loadingGetAll)

    return (
        <div className="container">
            <DashboardHeader onRefresh={revalidate} />
            {
                isLoadingGetAll && (
                    <p className="text-center text-gray-500 my-5">Loading ...</p>
                )
            }
            <div className="flex flex-wrap mt-10">
                {
                    todos.map(itm => (
                        <CardTodo 
                            key={itm._id}
                            todo={itm.todo} 
                            todoId={itm._id}
                            onDelete={revalidate}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Dashboard)
