import * as React from "react"
import { Helmet } from "react-helmet"

// config
import config from "../data/config"

// components
import HeaderComponent from "../components/header.component"
import FooterComponent from "../components/footer.component"

type AppProps = {
    bgColor: String,
    expandMenu: Boolean
}

class MainLayout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expandMenu: false
        }
    }

    toggleMenu = (toggle: boolean) => {
        this.setState({
            expandMenu: toggle
        })
    }

    render = () => {
        const { children, meta, bgColor } = this.props
        const { expandMenu } = this.state

        const localMeta = {
            author: config.meta.author,
            siteUrl: config.meta.siteUrl,
            title: config.meta.default.title,
            keywords: config.meta.default.keywords,
            description: config.meta.default.description
        };
      
        if (meta && meta !== undefined) {
            localMeta.title = meta.title;
            localMeta.keywords = meta.keywords;
            localMeta.description = meta.description;
        }

        return (
            <div className={ bgColor }>
                <Helmet>
                    <meta name="description" content={localMeta.description} />
                    <meta name="keywords" content={localMeta.keywords} />
                    <meta name="author" content={localMeta.author} />
                    <title>{localMeta.title}</title>
                    <link rel="canonical" href={localMeta.siteUrl} />
                </Helmet>
                <HeaderComponent expandMenu={expandMenu} />

                { children }

                <FooterComponent />
            </div>
        )
    }
}

export default MainLayout