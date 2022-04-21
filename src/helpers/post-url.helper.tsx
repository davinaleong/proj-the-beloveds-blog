import * as React from "react"

const PostUrlHelper = (slug: String, offset: Number = 0, page: Number = 0) => {
    let uri = `?slug=${slug}`
    if (offset) {
        uri += `&offset=${offset}`
    }
    if (page) {
        uri += `&page=${page}`
    }

    return `post${uri}`
}

export default PostUrlHelper