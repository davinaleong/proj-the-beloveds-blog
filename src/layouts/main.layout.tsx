import * as React from "react"
import { Helmet } from "react-helmet"

// config
import config from "../data/config"

// components
import HeaderComponent from "../components/header.component"
import FooterComponent from "../components/footer.component"
import LoaderComponent from "../components/loader.component"

type AppProps = {
    loading: boolean,
    children: any,
    meta: Object,
    bgColor: String,
    latestPost: Object
}

const MainLayout = (props: any) => {
    let defaultBgColor: string = "bg-primary-light"

    const { loading, children, meta, bgColor, latestPost } = props

    const localMeta = {
        author: config.meta.author,
        siteUrl: config.meta.siteUrl,
        title: config.meta.default.title,
        keywords: config.meta.default.keywords,
        description: config.meta.default.description
    }
    
    if (!loading) {
        defaultBgColor = bgColor
        if (meta && meta !== undefined) {
            const { title, description } = meta
            if (title && title !== undefined) {
                localMeta.title = title
            }
            if (description && description !== undefined) {
                localMeta.description = description
            }
        }
    }

    return (
        <div className={ defaultBgColor }>
            <Helmet>
                <meta name="description" content={localMeta.description} />
                <meta name="keywords" content={localMeta.keywords} />
                <meta name="author" content={localMeta.author} />
                <title>{localMeta.title}</title>
                <link rel="canonical" href={localMeta.siteUrl} />
            </Helmet>

            <HeaderComponent latestPost={latestPost} />

            { children }

            <FooterComponent />
        </div>
    )
}

export default MainLayout