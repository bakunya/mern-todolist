import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { memo, useCallback, useState } from 'react'

import SignInForm from '@/components/organisms/SignInForm'
import { signin } from '@/redux/reducers/auth'
import useGuess from '@/hooks/useGuess'
import signinAdapters from '@/adapters/signin'

const SignIn = () => {
    useGuess()

    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const handleSubmit = useCallback(val => {

        signinAdapters({ username: val.username, password: val.password })
            .then(res => dispatch(signin({ 
                username: res.credentials.username, 
                token: res.token
            })))
            .catch(er => setError(er.message))

    }, [setError, dispatch])

    return (
        <div className="container-centered">
            <div className="wrapper">
                <SignInForm onSubmit={handleSubmit} />
                <p className="text-red-600 text-center w-full mt-5 mx-auto sm:w-96">{error}</p>
                <Link to="/signup" className='text-center block mt-5 text-dark-green'>New in here? Sign up.</Link>
            </div>
        </div>
    )
}

export default memo(SignIn)