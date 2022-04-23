import * as React from "react"
import { Link } from "gatsby"
import dayjs from "dayjs"

// helpers
import PostUrlHelper from "../helpers/post-url.helper"

type AppProps = {
    post: Object
}

const PostItemComponent  = (props: any) => {
    const { post } = props
    const { title,  published_at, slug } = post

    const publishedAt: string = dayjs(published_at).format("D MMM YYYY")
    const link: string = PostUrlHelper(slug)

    return (
        <article className="post-item">
            <h3 className="post-title">{ title }</h3>
            <p className="post-date">{ publishedAt }</p>
            <Link to={ link } className="btn btn-link">View Post</Link>
        </article>
    )
}

export default PostItemComponent