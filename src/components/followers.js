import React from 'react'
import ProfileCard from './profileCard'

//Components for followers page
function Followers({followers}) {
  return (
    <>
      {followers.map((data)=>{return<ProfileCard key={data.userId} userData={data}/>}) /*Displaying user profiles from the followers data object*/}
    </>
    )
}

export default Followers