import * as React from "react"
import dayjs from "dayjs"

// helpers
import PostUrlHelper from "../helpers/post-url.helper"

// components
import ButtonComponent from "./button.component"

type AppProps = {
    post: Object,
    isIndex: boolean
}

const PostItemComponent  = (props: any) => {
    const { post, isIndex } = props
    const { title,  published_at, slug } = post

    const publishedAt: string = dayjs(published_at).format("D MMM YYYY")
    const link: string = isIndex ? PostUrlHelper(slug) : "./../" + PostUrlHelper(slug)

    return (
        <article className="post-item">
            <h3 className="post-title">{ title }</h3>
            <p className="post-date">{ publishedAt }</p>
            <ButtonComponent label="View Post" link={ link } className="btn btn-link"/>
        </article>
    )
}

export default PostItemComponent