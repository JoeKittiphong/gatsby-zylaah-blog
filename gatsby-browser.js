const React = require("react")
const Layout = require("./src/layout/MainLayout").default
exports.wrapPageElement = ({ props, element }) =>{
    return <Layout {...props}>
        {element}
    </Layout>
}