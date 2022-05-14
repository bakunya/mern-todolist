import clsx from 'clsx'
import { memo } from 'react'

const FormContainer = ({ onSubmit, className, children }) => {
  return (
    <form className={clsx(className, 'w-full sm:w-96')} onSubmit={onSubmit}>
        { children }
    </form>
  )
}

FormContainer.defaultProps = {
    onSubmit: () => {}
}

export default memo(FormContainer)