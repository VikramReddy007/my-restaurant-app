import React from 'react'
import Header from './components/common/header';

const errorDemo = () => {
    return (
        <>
            <Header />
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href="/">Homepage</a>
                </div>
            </div>
        </>
    )
}

export default errorDemo;