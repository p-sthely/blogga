import React from 'react'

import { Header, PostsList, Cta, Footer } from './containers'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <PostsList category='Design Tools' />
            <PostsList category='Weekly Updates' />
            <PostsList category='Tutorials' />
            <Cta />
            <Footer />
        </div>
    )
}

export default App
