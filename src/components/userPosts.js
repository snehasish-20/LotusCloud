import React from 'react'
import PostCard from './postCard'

//Component to display users posts
function UserPosts({userPosts}) {
  return (
    <>
      {userPosts.map((data)=>{return <PostCard key={data.id} postData={data}/>})}
    </>
    
  )
}

export default UserPosts