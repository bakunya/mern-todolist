import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { memo, useCallback, useState } from 'react'

import signup from '@/adapters/signup'
import useGuess from '@/hooks/useGuess'
import { signin } from '@/redux/reducers/auth'
import SignUpForm from '@/components/organisms/SignUpForm'

const SignUp = () => {
    useGuess()
    
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const handleSubmit = useCallback(val => {

        signup({ username: val.username, password: val.password })
            .then(res => dispatch(signin({ 
                username: res.credentials.username, 
                token: res.token
            })))
            .catch(er => setError(er.message))

    }, [setError, dispatch])

    return (
        <div className="container-centered">
            <div className="wrapper">
                <SignUpForm onSubmit={handleSubmit} />
                <p className="text-red-600 text-center w-full mt-5 mx-auto sm:w-96">{error}</p>
                <Link to="/signin" className='text-center block mt-5 text-dark-green'>Have an account? Sign in.</Link>
            </div>
        </div>
    )
}

export default memo(SignUp)