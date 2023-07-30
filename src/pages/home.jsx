import React from 'react'
import {graphql, Link} from "gatsby"

function Linkbar({data : {allMarkdownRemark}}) {
  return (<div>
        {allMarkdownRemark.nodes.map(({id, frontmatter})=>{
            return <p key={id}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </p>
        })}
    </div>
  )
}

export default Linkbar


export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    title
                    path
                }
            }
        }
    }
`