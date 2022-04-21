import * as React from "react"

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
        const { children, bgColor } = this.props
        const { expandMenu } = this.state

        return (
            <div className={ bgColor }>
                <HeaderComponent expandMenu={expandMenu} />

                { children }

                <FooterComponent />
            </div>
        )
    }
}

export default MainLayout