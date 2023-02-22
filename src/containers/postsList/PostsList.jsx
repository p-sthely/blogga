import React from 'react'
import './postsList.css'

import PostsListItem from '../../components/postsListItem/PostsListItem'

const PostsList = ( { category } ) => {
    return (
        <div className='postsList'>
            <h2 className='postsList__title'>{ category }</h2>
            <PostsListItem />
        </div>
    )
}

export default PostsList
