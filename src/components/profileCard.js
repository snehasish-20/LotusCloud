import React from 'react'
import {Card,Button} from 'react-bootstrap'

//Component for user card
function ProfileCard({userData}) {
  return (
    <Card id="cardContainer">
      <div id="userCard">
        <div id="leftConatiner">
          <img src={userData?.userImg} alt="User" className='userCardImg'/>
        </div>
        <div id="middleContainer">
          <h6>{userData?.userName}</h6>
          <span id="followersCount">Followers: {userData?.followersCount}</span>
        </div>
        <Button className={userData?.following?"following":"notFollowing"} variant="danger" id="followBttn">{userData?.following?"Following":"Follow"}</Button>
      </div>
    </Card>
  )
}

export default ProfileCard