import * as React from "react"
import ReactMarkdown from 'react-markdown';

type AppProps = {
    text: string
}

const ContentComponent = (props: any) => {
  const { text } = props
  return (
    <section className="content-section bg-primary-light">
      <div className="container content">
        <ReactMarkdown children={ text } />
      </div>
    </section>
  )
}

export default ContentComponent