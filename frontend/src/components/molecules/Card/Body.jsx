import clsx from "clsx"

const Body = ({ className, children }) => {
    return (
        <div className={clsx(className, "content cursor-pointer")}>
            { children }
        </div>
    )
}

export default Body