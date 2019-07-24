/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Social from "./social"


const siteFooter = () => {
  const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              socialLinks {
                name
                url
              }
            }
          }
        }
      `)
    return (
        <footer
          sx={{
            color: "footer.text",
            backgroundColor: "footer.background",
            px: 3,
            py: 3,

            "a": {
              color: "footer.links"
          }
          }}
        >
          <p>© {new Date().getFullYear()} {data.site.siteMetadata.title}</p>
          <div
          sx={{
            "a": {
              color: "footer.icons",
              mr: 3
          },
            "a:last-of-type": {
              mr: 0
            },
            "a:hover": {
              color: "primary"
            }
          }}
          >
            <Social/>
          </div>
        </footer>
    )
}

export default siteFooter