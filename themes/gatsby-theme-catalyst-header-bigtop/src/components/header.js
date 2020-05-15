/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import NavIcons from "./navbar/nav-icons"
import MobileButton from "./navbar/nav-mobile-button"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useBreakpointIndex } from "@theme-ui/match-media"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useStickyHeader } = useCatalystConfig()
  const index = useBreakpointIndex()
  const isMobile = index <= 1
  return (
    <header
      sx={{
        display: "grid",
        position: isMobile ? (useStickyHeader ? "sticky" : null) : "static",
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
          maxWidth: "maxPageWidth",
          width: "100%",
          display: "grid",
          gridTemplateColumns: ["50px 1fr 50px", null, "1fr", null, null],
          gridTemplateAreas: [
            `
          ". branding mobileButton" 
          "nav nav nav"
          "icons icons icons"
          `,
            null,
            `
          "icons" 
          "branding"
          "nav"
          `,
            null,
            null,
          ],
        }}
      >
        <NavIcons />
        <Branding />
        <Nav />
        <MobileButton />
      </div>
    </header>
  )
}

export default SiteHeader
