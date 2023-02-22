import React from 'react'

import { Header, PostsList, Cta, Footer } from './containers'
import './App.css'

import { thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7, thumbnail8, thumbnail9 } from './imports'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <PostsList category='Design Tools' thumbnail1={ thumbnail1 } thumbnail2={ thumbnail2 } thumbnail3={ thumbnail3 }/>
            <PostsList category='Weekly Updates' thumbnail1={ thumbnail4 } thumbnail2={ thumbnail5 } thumbnail3={ thumbnail6 } />
            <PostsList category='Tutorials' thumbnail1={ thumbnail7 } thumbnail2={ thumbnail8 } thumbnail3={ thumbnail9 } />
            <Cta />
            <Footer />
        </div>
    )
}

export default App
