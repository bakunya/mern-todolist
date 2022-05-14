import { memo, useId } from 'react'
import clsx from 'clsx'

const Input = ({ className, type, onChange, value, placeholder, title, error }) => {
    const id = useId();
    return (
        <div className={className}>
            {
                title && <label htmlFor={id} className="block ml-2 mb-2 capitalize text-lg text-dark-green">{title}</label>
            }
            <input type={type} id={id} onChange={onChange} value={value} className={clsx('input-primary w-full', error && 'border-red-600')} placeholder={placeholder} />
            {
                error && <span className="capitalize text-lg text-red-600 block mt-2 ml-2">{error}</span>
            }
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
    onChange: () => {},
    value: '',
    placeholder: '',
}

export default memo(Input)