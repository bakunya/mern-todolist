import { memo, useCallback, useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import FormContainer from '@/components/atoms/FormContainer'

const SignUpForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = useCallback(e => setUsername(e.target.value), [setUsername])
    const handleChangePassword = useCallback(e => setPassword(e.target.value), [setPassword])
    const handleSubmit = useCallback(e => {

        e.preventDefault()
        onSubmit({ password, username })

    }, [password, username, onSubmit])

    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1 className="text-white max-w-fit -skew-x-6 -skew-y-2 p-2 bg-dark-green">Sign Up</h1>
            <Input className="mt-10" title="username" onChange={handleChangeUsername} value={username} />
            <Input className="mt-5" title="password" type="password" onChange={handleChangePassword} value={password} />
            <Button className="mt-5 max-w-fit ml-auto block" type="submit" title="Sign Up" />
        </FormContainer>
    )
}

SignUpForm.defaultProps = {
    onSubmit: () => {}
}

export default memo(SignUpForm)