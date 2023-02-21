import React from 'react'

import { Header, PostsList, Cta, Footer } from './containers'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <PostsList />
            <PostsList />
            <PostsList />
            <Cta />
            <Footer />
        </div>
    )
}

export default App
