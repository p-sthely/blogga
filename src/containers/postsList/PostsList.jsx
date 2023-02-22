import React from 'react'
import './postsList.css'

import PostsListItem from '../../components/postsListItem/PostsListItem'

const PostsList = ( { category, thumbnail1, thumbnail2, thumbnail3 } ) => {

    return (
        <div className='postsList'>
            <h2 className='postsList__title'>{ category }</h2>
            <PostsListItem category={ category } thumbnail={ thumbnail1 } />
            <PostsListItem category={ category } thumbnail={ thumbnail2 } />
            <PostsListItem category={ category } thumbnail={ thumbnail3 } />
        </div>
    )
}

export default PostsList
