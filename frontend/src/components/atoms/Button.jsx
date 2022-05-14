import clsx from 'clsx'
import { memo } from 'react'

const Button = ({ className, type, onSubmit, onClick, title }) => {
    return (
        <button className={clsx(className, 'btn-primary')} type={type} onSubmit={onSubmit} onClick={onClick}>{title}</button>
    )
}

Button.defaultProps = {
    type: 'button',
    onSubmit: () => {},
    onClick: () => {},
    title: 'Im a button'
}

export default memo(Button)