import * as React from "react"
import { Link } from "gatsby"

// helpers
import ArchiveListUrlHelper from "../helpers/archive-list-url.helper"

type AppProps = {
  label: string,
  page: number,
  image: any,
  isImage: boolean,
  active: boolean
}

const PaginationItemComponent = (props: any) => {
  const { label, page, image, isImage, active, folder, updatePage } = props
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
      <Link to={ link } className={ className }>{ labelElement }</Link>
    </li>
  )
}

export default PaginationItemComponent