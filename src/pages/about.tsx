import "../sass/main.scss"

import * as React from "react"
import { graphql } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import ContentComponent from "../components/content.component"

type AppProp = {
    data: any
}

// markup
const AboutPage = ({ data }) => {
    const { pages } = data.cms
    const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
    const meta: Object = {
        title: `${config.meta.default.title} - ${pageData.title}`,
        description: pageData.meta_description
    }
    const title: string =  pageData.title

    return (
        <MainLayout bgColor="bg-primary-light" meta={ meta }>
            <main className="main-content">
                <HeroComponent title={ title } />
                <ContentComponent text={ pageData.text } />
            </main>
        </MainLayout>
    )
}

export default AboutPage

export const pageQuery = graphql`
query AboutPageQuery {
  cms {
    pages(name: "About") {
        data {
            name
            title
            subtitle
            text
            meta_title
            meta_description
        }
    }
  }
}
`