import React from 'react'
import {graphql} from "gatsby"

function Blogs({data:{markdownRemark}}) {
  return (
    <div>
        <div className="title">{markdownRemark.frontmatter.title}</div>
        <div dangerouslySetInnerHTML={{__html : markdownRemark.html}}></div>
    </div>
  )
}

export default Blogs

export const query = graphql`
    query($id : String) {
        markdownRemark(id : {eq : $id}) {
            html
            frontmatter {
                title
            }
        }
    }
`