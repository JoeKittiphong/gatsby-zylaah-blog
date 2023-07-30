import React from 'react'
import "bulma/css/bulma.min.css"
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
    return (
        <section className="section">
            <div className="container">
                <Navbar />
                {children}
            </div>
        </section>
    )
}

export default MainLayout