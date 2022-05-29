import React from 'react'
import ProfileCard from './profileCard'

//Components to display the following users
function Following({following}) {
  return (
    following.map((data)=>{return<ProfileCard key={data.userId} userData={data}/> /*Displaying user profiles from the following data object*/})
    )
}

export default Following