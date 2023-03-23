// gatsby-browser.js
require("prismjs/themes/prism-tomorrow.css")

const React = require("react")
const { MenuProvider } = require("./src/components/MenuContext")

exports.wrapRootElement = ({ element }) => {
  return <MenuProvider>{element}</MenuProvider>
}
