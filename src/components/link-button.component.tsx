import * as React from "react"

type AppProps = {
    label: String,
    link: String
}

const LinkButtonComponent = (props: any) => {
    const { label, link } =  props
    return (
        <a href={ link } className="btn btn-primary">{ label }</a>
    )
}

export default LinkButtonComponent