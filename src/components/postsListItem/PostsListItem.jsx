import React from 'react'
import './postsListItem.css'

const Meta = () => (
    <div className='postsListItem__meta'>
        <div className='postsListItem__meta__category'>
            Design Tools
        </div>
        <div className='postsListItem__meta__date'>
            August 13, 2021
        </div>
    </div>
)

const Title = () => (
    <h3 className='postsListItem__title'>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h3>
)

const Summary = () => (
    <p className='postsListItem__summary'>
        Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.
    </p>
)

const Thumbnail = () => (
    <div>Thumbnail</div>
)

const PostsListItem = () => {
    return (
        <div className='postsListItem'>
            <div>
                <Meta />
                <Title />
                <Summary />
            </div>
            <Thumbnail />
        </div>
    )
}

export default PostsListItem
