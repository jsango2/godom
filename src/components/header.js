import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../images/LogoTopsvg.svg"
import Headroom from "react-headroom"
import styled from "styled-components"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  ${"" /* padding: 1.85rem 0; */}
  height: 85px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  }
`
const Telefon = styled.div`
  @media only screen and (max-width: 60em) {
    display: none;
  }
`

const Logo = styled.div`
  ${"" /* display: inline-block; */}
  margin-bottom: 0;
  margin-right: 15px;
  margin-left: 175px;
  width: 97px;
  @media only screen and (max-width: 960px) {
    position: relative;
    top: 15px;
    margin-left: 130px;
  }

  @media only screen and (max-width: 530px) {
    position: relative;
    top: 15px;
    margin-left: 70px;
    width: 60px;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 40px;
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")

  return (
    <Headroom
      disableInlineStyles
      onPin={() => setDisplay("animation")}
      onUnpin={() => setDisplay("")}
      style={{
        zIndex: "9999",
      }}
    >
      <header
        className="headerShadow"
        style={{
          position: "relative",
          background: `white`,
          zIndex: "9999",
        }}
      >
        <HeaderWrap className={`header-wrap`}>
          <div className="logoHeader">
            <Link to="/">
              <Logo>
                <img src={logo} alt="logo" width="97px" />
              </Logo>
            </Link>

            <div
              className="title-group"
              style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `flex-start`,
              }}
            ></div>
          </div>
          <nav className={`primary-nav ${display}`}>
            <Telefon
              className="LinkHeader"
              style={{ fontSize: "16px", color: "#B2B2B2", cursor: "pointer" }}
            >
              <a style={{ color: " #b2b2b2" }} href="tel: +385 (0) 91 6318 536">
                {" "}
                +385 (0) 91 6318 536
              </a>
            </Telefon>

            <AnchorLink
              offset={100}
              to="/#projekti"
              className="LinkHeader LinkHeaderProjekti"
              activeClassName="active"
            >
              PROJEKTI
            </AnchorLink>

            <AnchorLink
              to="/#kontakt"
              className="LinkHeader"
              activeClassName="active"
            >
              KONTAKT
            </AnchorLink>
          </nav>
        </HeaderWrap>
      </header>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
