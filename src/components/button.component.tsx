import * as React from "react"
import { Link } from "gatsby"

type AppProps = {
    label: string,
    link: string,
    className: string
}

const LinkButtonComponent = (props: any) => {
    const { label, link, className } =  props
    return (
        <Link to={ link } className={ className }>{ label }</Link>
    )
}

export default LinkButtonComponent