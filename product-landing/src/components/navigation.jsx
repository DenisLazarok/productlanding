import React, {Component} from "react";
import {
    Container,
    Nav,
    NavItem
} from "reactstrap";


export default class extends Component {
    dropNav = React.createRef();

    hamButton = React.createRef();

    over = () => {
        this.dropNav.current.style.display = "block";
        this.opacityTiemOut = setTimeout(() => {
            this.dropNav.current.style.opacity = "1";
        });
    };
    out = () => {
        this.dropNav.current.style.transition = "all .5s 1s";
        this.dropNav.current.style.opacity = "0";
    };
    onHide = () => {
        if (this.dropNav.current.style.opacity === "1") return;
        this.dropNav.current.style.display = "none";
        this.dropNav.current.style.transition = "all .5s";
    };

    hideNav = (e) => {
        document.body.style.overflow = "visible";
        this.mobileMenu.style.display = "none";
        this.hamButton.style.display = "";
        this.mobileNav.style.transform = `translateX(-100%)`;
    };

    showNav = (e) => {
        e.preventDefault();
        document.body.style.overflow = "hidden";
        this.hamButton.style.display = "none";
        this.menuWrapper.style.display = "block";
        this.mobileMenu.style.display = "block";
        setTimeout(() => {
            this.mobileNav.style.transform = "translateX(0px)";
        }, 200);
    };

    fixedNav() {
        const nav = document.querySelector(".navi-menu");
        const navHeigth = parseInt(window.getComputedStyle(nav).height, 10);
        const scrollEl = document.scrollingElement;
        if (scrollEl.scrollTop > navHeigth) {
            nav.style.position = "fixed";
            nav.classList.add("scroll-nav");
        } else {
            nav.style.position = "static";
            nav.classList.remove("scroll-nav");
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.fixedNav);
        this.menuWrapper = document.querySelector(".mobile-wrapper");
        this.mobileMenu = document.querySelector(".mobile-menu");
        this.mobileNav = document.querySelector(".mobile-nav");
        this.hamButton = document.querySelector(".ham");
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.fixedNav);
    }

    render() {
        return (
            <div className="navi-menu">
                <Container>

                    <Nav fill className="nav-n">
                        <NavItem className="nav-item-n button">
                            <a className="navbar-brand" >
                                <img src="icon2.png" className="d-inline-block align-middle mr-2" width="45" alt=""/>
                                Muhammad&Mert
                            </a>
                        </NavItem>
                        <NavItem className="nav-item-n button">
                            <button>Create order</button>
                        </NavItem>
                    </Nav>
                </Container>
            </div>
        );
    }
}
