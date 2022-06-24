import "../sass/main.scss"

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import ContactContentComponent from "../components/contact-content.component"

// markup
const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            cms {
                pages(name: "Contact") {
                    data {
                        name
                        title
                        subtitle
                        text
                        meta_title
                        meta_description
                    }
                }

                posts(first: 1) {
                    data {
                        slug
                    }
                }
            }
        }
    `)

    const { pages, posts } = data.cms

    const latestPost = posts.data.length > 0 ? posts.data[0] : {}

    const pageData: Object = pages.data.length > 0 ? pages.data[0] : {}
    const { title, text, meta_title, meta_description } = pageData
    const meta: Object = {
        title: `${config.meta.default.title} - ${meta_title}`,
        description: meta_description
    }

    return (
        <MainLayout bgColor="bg-primary-light" meta={ meta } latestPost={ latestPost }>
            <main className="main-content">
                <HeroComponent title={ title } />
                <ContactContentComponent text={ text } />
            </main>
        </MainLayout>
    )
}

export default ContactPage