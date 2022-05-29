import React from 'react'
import ProfileCard from './profileCard'

//Component to display the users in users page
function Users() {

  //users data
  const usersData=[
    {
      userId:"231234",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQF1uByDrg7YxQ/profile-displayphoto-shrink_400_400/0/1632081530760?e=1659571200&v=beta&t=8hKYeOYa0TSAWocy-uB2zDEdsI3HWN0EVnsx1gJy6L4",
      userName:"Arpit Adlakha",
      followersCount:123,
      following:true
    },
    {
      userId:"123412",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQH3InPeUGPoEg/profile-displayphoto-shrink_400_400/0/1634723228747?e=1659571200&v=beta&t=OnE1qEUOuhUPWc2Z1fhq-5vZFfI9v9s4xJztdJ1aiws",
      userName:"Deepak Nayak",
      followersCount:43,
      following:false
    },
    {
      userId:"1234222",
      userImg:"https://media-exp1.licdn.com/dms/image/C4E03AQFzqHakYfTN7Q/profile-displayphoto-shrink_400_400/0/1635262576029?e=1659571200&v=beta&t=nVFAOTBU7rEtS9xIKdj_mMhzjeoGkYexXS865jACW2Q",
      userName:"Kunal Gupta",
      followersCount:13,
      following:true
    },
    {
      userId:"231234222",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQFunmLRIB8Gzg/profile-displayphoto-shrink_400_400/0/1589821545453?e=1659571200&v=beta&t=zOebkGrp9jG6aEQ1brdPhc6SqG8GWdZJP5iL8AcGZM0",
      userName:"Priyanshu Jha",
      followersCount:543,
      following:true
    },
    {
      userId:"32213",
      userImg:"https://media-exp1.licdn.com/dms/image/C5103AQGn9sVbS9BdYg/profile-displayphoto-shrink_400_400/0/1552889631098?e=1659571200&v=beta&t=KjnjgyiiuU9dbTNL2T8LxaTxZinJAlk-yjmx3CDKDSw",
      userName:"Pratyush kumar",
      followersCount:267,
      following:false
    },
    {
      userId:"76729827",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQFMFb2ZC3ZCYw/profile-displayphoto-shrink_400_400/0/1596697745854?e=1659571200&v=beta&t=yFz_UgcRs9SDnVfI2bagQb7aNziyOCWF--gnF3nikss",
      userName:"Pritam Kar",
      followersCount:903,
      following:true
    },
    {
      userId:"123412",
      userImg:"https://media-exp1.licdn.com/dms/image/C5603AQH3InPeUGPoEg/profile-displayphoto-shrink_400_400/0/1634723228747?e=1659571200&v=beta&t=OnE1qEUOuhUPWc2Z1fhq-5vZFfI9v9s4xJztdJ1aiws",
      userName:"Deepak Nayak",
      followersCount:43,
      following:false
    }
  ]
  return (
    <div className='section-container'>
      {usersData.map((data)=>{return<ProfileCard key={data.userId} userData={data}/>})}
    </div>
  )
}

export default Users