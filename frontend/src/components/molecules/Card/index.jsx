import clsx from 'clsx'
import { memo } from 'react'
import { getChildrenByType } from 'react-nanny'
import CardBody from './Body'
import CardFooter from './Footer'

const Card = ({ children, className }) => {
    const body = getChildrenByType(children, CardBody)
    const footer = getChildrenByType(children, CardFooter)

    return (
        <div className={clsx(className, "card p-5 rounded border-2 border-black duration-300 transition-shadow active:shadow-2xl hover:shadow-2xl focus:shadow-2xl")}>
            { body }
            { footer }
        </div>
    )
}

Card.Body = CardBody
Card.Footer = CardFooter

export default Card