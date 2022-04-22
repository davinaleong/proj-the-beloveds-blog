import * as React from "react"

// config
import config from "../data/config"

// images
import Left from "../images/left.svg"
import Right from "../images/right.svg"

// components
import PaginationItemComponent from "../components/pagination-item.component"

type AppProps = {
    paginatorInfo: Object
}

const PaginationComponent = (props: any) => {
  const { paginatorInfo } = props

  const paginationItems = [
    {
      label: "",
      page: 1,
      image: Left,
      isImage: true,
      active: false
    },
    {
      label: "1",
      page: 1,
      image: null,
      isImage: false,
      active: false
    },
    {
      label: "2",
      page: 2,
      image: null,
      isImage: false,
      active: true
    },
    {
      label: "3",
      page: 3,
      image: null,
      isImage: false,
      active: false
    },
    {
      label: "4",
      page: 4,
      image: null,
      isImage: false,
      active: false
    },
    {
      label: "",
      page: 4,
      image: Right,
      isImage: true,
      active: false
    },
  ]

  return (
    <section className="pagination-section bg-primary-light">
      <div className="container">
        <ul className="pagination">
          { paginationItems.map(({ label, page, image, isImage, active }, index) => <PaginationItemComponent label={ label } page={ page } image={ image } isImage={ isImage } active={ active } key={ 'pic' + index } />) }
        </ul>
      </div>
    </section>
  )
}

export default PaginationComponent