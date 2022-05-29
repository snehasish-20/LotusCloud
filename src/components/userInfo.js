import React from 'react'

//Component to display users data
function UserInfo({userDetails}) {
  return (
    <div id="userInfo">
        <div id="imgContainer">
            <img src={userDetails?.Img} alt="User" className="userImg"/>
        </div>
        <div id="userDetailsContainer">
            <h4>{userDetails.name}</h4>
            <div id="statistics">
                <h6>Posts: <span>{userDetails.postsCount}</span></h6>
                <h6>Followers: <span>{userDetails.followersCount}</span></h6>
                <h6>Following: <span>{userDetails.followingCount}</span></h6>
            </div>
        </div>
    </div>
  )
}

export default UserInfo