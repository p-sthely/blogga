import React from 'react'
import './postsList.css'

import PostsListItem from '../../components/postsListItem/PostsListItem'

const Title = () => (
    <h2 className='postsList__title'>Design Tools</h2>
)

const PostsList = () => {
    return (
        <div className='postsList'>
            <Title />
            <PostsListItem />
        </div>
    )
}

export default PostsList
