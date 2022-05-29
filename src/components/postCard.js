import React from 'react'
import {Card} from 'react-bootstrap'

//Component for posts of feed page
function PostCard({postData}) {
  return (
        <Card id="cardContainer">
        <div id="postCard">
        <div id="postOwner">
          <img src={postData?.creatorImg} alt="User" className='userCardImg'/>
        </div>
        <div id="post">
          <div id="postInfo">
            <h6>{postData?.creatorName}</h6>
            <span id="followersCount">{postData?.createdAt}</span>
          </div>
          <div id="postContent">
            <p>{postData?.postDescription}</p>
          </div>
        </div>
        <div id="postCircle"></div>
      </div>
    </Card>
  )
}

export default PostCard
