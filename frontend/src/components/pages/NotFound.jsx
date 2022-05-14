import { memo } from 'react'

const NotFound = () => {
  return (
        <div className="container-centered">
            <h1 className="text-center text-gray-500">404 Page Not Found.</h1>
        </div>
  )
}

export default memo(NotFound)