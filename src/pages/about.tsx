import "../sass/main.scss"

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

// config
import config from "../data/config"

// layout
import MainLayout from "../layouts/main.layout"

// components
import HeroComponent from "../components/hero.component"
import ContentComponent from "../components/content.component"
import LoaderComponent from "../components/loader.component"

const endpoint = `${config.apiEndPoint}blog/about`

type AppProp = {
    data: any
}

// markup
class AboutPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: {}
      };
    }
  
    componentDidMount() {
      fetch(endpoint, { method: "GET" })
        .then(response => response.json())
        .then(data => this.setState({ loading: false, data: data }))
        .catch(err => alert(err))
    }
  
    render() {
      const { loading, data } = this.state
      let content = (
        <main className="main-content">
          <LoaderComponent />
        </main>
      )
      let meta: Object = {}
      let latestPost: Object = {}
  
      if (!loading) {
        const { page, latest } = data
        latestPost = latest[0]
        meta = {
          description: page.meta_description
        }
        content = (
          <main className="main-content">
                <HeroComponent title={ page.title } />
                <ContentComponent text={ page.text } />
          </main>
        )
      }
  
      return (
        <MainLayout bgColor="bg-primary-light" loading={ loading } meta={ meta } latestPost={ latestPost }>
          { content }
        </MainLayout>
      )
    }
  }
  
  export default AboutPage