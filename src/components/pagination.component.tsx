import * as React from "react"

// config
import config from "../data/config"

// images
import Left from "../images/left.svg"
import Right from "../images/right.svg"

// components
import PaginationItemComponent from "../components/pagination-item.component"

type AppProps = {
    current: number,
    last: number
}

const PaginationComponent = (props: any) => {
  const { current, last, folder } = props

  let prev: number = parseInt(current) - 1
  if (prev < 1) {
    prev = 1
  }

  let next: number = parseInt(current) + 1
  if (next > last) {
    next = last
  }

  const paginationItems = []
  if (current > 1) {
    paginationItems.push({
      label: "",
      page: prev,
      image: Left,
      isImage: true,
      active: false
    })
  }

  for (let i: number = 0; i < last; i++) {
    const page = i + 1;
    paginationItems.push({
      label: page,
      page: page,
      image: null,
      isImage: false,
      active: (page == current)
    })
  }

  if (current < last) {
    paginationItems.push({
      label: "",
      page: next,
      image: Right,
      isImage: true,
      active: false
    })
  }

  return (
    <section className="pagination-section bg-primary-light">
      <div className="container">
        <ul className="pagination">
          { paginationItems.map(({ label, page, image, isImage, active }, index) => <PaginationItemComponent label={ label } page={ page } image={ image } isImage={ isImage } active={ active } folder={ folder } fetchData={ props.fetchData } key={ 'pic' + index } />) }
        </ul>
      </div>
    </section>
  )
}

export default PaginationComponent