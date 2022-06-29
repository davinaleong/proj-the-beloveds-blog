import * as React from "react"
import { Link } from "gatsby"

// helpers
import ArchiveListUrlHelper from "../helpers/archive-list-url.helper"
import { threadId } from "worker_threads"

type AppProps = {
  label: string,
  page: number,
  image: any,
  isImage: boolean,
  active: boolean
}

class PaginationItemComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  fetchData = () => {
    const { page, fetchData } = this.props
    fetchData(page)
  }

  render() {
    const { label, page, image, isImage, active, folder } = this.props
    const link = `?folder=${folder}&page=${page}`

    let className = "pagination-link"
    if (active) {
      className = "pagination-link active"
    }

    let labelElement = label
    if (isImage) {
      className = "pagination-link-arrow"
      labelElement = (<img src={ image } alt="Pagination Icon" className="icon-pagination" />)
    }

    return (
      <li className="pagination-item">
        <Link to={ link } className={ className } onClick={ this.fetchData }>{ labelElement }</Link>
      </li>
    )
  }
}

export default PaginationItemComponent