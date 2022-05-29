import React,{useState} from 'react'
import UserInfo from './userInfo'
import {Tabs,Tab} from 'react-bootstrap'
import UserPosts from './userPosts';
import Followers from './followers';
import Following from './following';

//component for user profile
function Profile() {

    //data for user
    const userData={
        name:"Snehasish Pati",
        Img:"https://media-exp1.licdn.com/dms/image/C5603AQENuwwO1yYmxQ/profile-displayphoto-shrink_400_400/0/1647586930501?e=1659571200&v=beta&t=cSKLsjngdfJLx4wDI53dSgkres6yDwQAVk86wCVjoYs",
        postsCount:4,
        followersCount:5,
        followingCount:4,
        posts:[
          {
            postId:"8981234",
            creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQENuwwO1yYmxQ/profile-displayphoto-shrink_400_400/0/1647586930501?e=1659571200&v=beta&t=cSKLsjngdfJLx4wDI53dSgkres6yDwQAVk86wCVjoYs",
            creatorName:"Snehasish Pati",
            createdAt:"20 mins ago",
            postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
          },
          {
            postId:"898122234",
            creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQENuwwO1yYmxQ/profile-displayphoto-shrink_400_400/0/1647586930501?e=1659571200&v=beta&t=cSKLsjngdfJLx4wDI53dSgkres6yDwQAVk86wCVjoYs",
            creatorName:"Snehasish Pati",
            createdAt:"10 hours ago",
            postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam.ipsum dolor sit amet consectetur adipisicing elit. "
          },
          {
            postId:"898133234",
            creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQENuwwO1yYmxQ/profile-displayphoto-shrink_400_400/0/1647586930501?e=1659571200&v=beta&t=cSKLsjngdfJLx4wDI53dSgkres6yDwQAVk86wCVjoYs",
            creatorName:"Snehasish Pati",
            createdAt:"1 day ago",
            postDescription:"ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi."
          },
          {
            postId:"89812314",
            creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQENuwwO1yYmxQ/profile-displayphoto-shrink_400_400/0/1647586930501?e=1659571200&v=beta&t=cSKLsjngdfJLx4wDI53dSgkres6yDwQAVk86wCVjoYs",
            creatorName:"Snehasish Pati",
            createdAt:"20 days ago",
            postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
          }
        ],
        following:[
          {
            userId:"231234",
            userImg:"https://media-exp1.licdn.com/dms/image/C5603AQF1uByDrg7YxQ/profile-displayphoto-shrink_400_400/0/1632081530760?e=1659571200&v=beta&t=8hKYeOYa0TSAWocy-uB2zDEdsI3HWN0EVnsx1gJy6L4",
            userName:"Arpit Adlakha",
            followersCount:123,
            following:true
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
            userId:"76729827",
            userImg:"https://media-exp1.licdn.com/dms/image/C5603AQFMFb2ZC3ZCYw/profile-displayphoto-shrink_400_400/0/1596697745854?e=1659571200&v=beta&t=yFz_UgcRs9SDnVfI2bagQb7aNziyOCWF--gnF3nikss",
            userName:"Pritam Kar",
            followersCount:903,
            following:true
          },
        ],
        followers:[
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
            userId:"32213",
            userImg:"https://media-exp1.licdn.com/dms/image/C5103AQGn9sVbS9BdYg/profile-displayphoto-shrink_400_400/0/1552889631098?e=1659571200&v=beta&t=KjnjgyiiuU9dbTNL2T8LxaTxZinJAlk-yjmx3CDKDSw",
            userName:"Pratyush kumar",
            followersCount:267,
            following:false
          },
          {
            userId:"123412",
            userImg:"https://media-exp1.licdn.com/dms/image/C5603AQH3InPeUGPoEg/profile-displayphoto-shrink_400_400/0/1634723228747?e=1659571200&v=beta&t=OnE1qEUOuhUPWc2Z1fhq-5vZFfI9v9s4xJztdJ1aiws",
            userName:"Deepak Nayak",
            followersCount:43,
            following:false
          }
        ]
    }
    const [key, setKey] = useState('posts');
  return (
    <div className='section-container'>
      <UserInfo userDetails={userData}/>
      <hr/>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      >
        <Tab eventKey="posts" title="Posts" className="tabs">
          <UserPosts userPosts={userData.posts}/>
        </Tab>
        <Tab eventKey="followers" title="Followers" className="tabs">
          <Followers followers={userData.followers}/>
        </Tab>
        <Tab eventKey="following" title="Following" className="tabs">
          <Following following={userData.following}/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Profile