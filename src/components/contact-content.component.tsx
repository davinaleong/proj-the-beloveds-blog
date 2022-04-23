import * as React from "react"
import ReactMarkdown from 'react-markdown';

type AppProps = {
    text: string
}

const ContactContentComponent = (props: any) => {
  const { text } = props
  return (
    <section className="content-section">
      <div className="container content align-center">
        <ReactMarkdown children={ text } />
      </div>
    </section>
  )
}

export default ContactContentComponent