import React from 'react'
import PostCard from './postCard'
import {Button} from 'react-bootstrap'

//Component for Feeds page
function Feed() {

  //data for the posts
  const feedData=[
    {
      postId:"1234",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQF1uByDrg7YxQ/profile-displayphoto-shrink_400_400/0/1632081530760?e=1659571200&v=beta&t=8hKYeOYa0TSAWocy-uB2zDEdsI3HWN0EVnsx1gJy6L4",
      creatorName:"Arpit Adlakha",
      createdAt:"20 mins ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    },
    {
      postId:"12322",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQH3InPeUGPoEg/profile-displayphoto-shrink_400_400/0/1634723228747?e=1659571200&v=beta&t=OnE1qEUOuhUPWc2Z1fhq-5vZFfI9v9s4xJztdJ1aiws",
      creatorName:"Deepak Nayak",
      createdAt:"1 hour ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    },
    {
      postId:"123456",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C4E03AQFzqHakYfTN7Q/profile-displayphoto-shrink_400_400/0/1635262576029?e=1659571200&v=beta&t=nVFAOTBU7rEtS9xIKdj_mMhzjeoGkYexXS865jACW2Q",
      creatorName:"Kunal Gupta",
      createdAt:"12 hours ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    },
    {
      postId:"3221234",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQFunmLRIB8Gzg/profile-displayphoto-shrink_400_400/0/1589821545453?e=1659571200&v=beta&t=zOebkGrp9jG6aEQ1brdPhc6SqG8GWdZJP5iL8AcGZM0",
      creatorName:"Priyanshu Jha",
      createdAt:"23 hours ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    },
    {
      postId:"1211234",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C5103AQGn9sVbS9BdYg/profile-displayphoto-shrink_400_400/0/1552889631098?e=1659571200&v=beta&t=KjnjgyiiuU9dbTNL2T8LxaTxZinJAlk-yjmx3CDKDSw",
      creatorName:"Pratyush kumar",
      createdAt:"11 days ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    },
    {
      postId:"8981234",
      creatorImg:"https://media-exp1.licdn.com/dms/image/C5603AQFMFb2ZC3ZCYw/profile-displayphoto-shrink_400_400/0/1596697745854?e=1659571200&v=beta&t=yFz_UgcRs9SDnVfI2bagQb7aNziyOCWF--gnF3nikss",
      creatorName:"Pritam Kar",
      createdAt:"20 days ago",
      postDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo provident dolores distinctio laborum, numquam odio dignissimos velit autem nam nobis nisi. Dolore pariatur placeat et consectetur commodi. Odio, pariatur."
    }
  ]
  return (
    <div className='section-container'>
        <Button variant="danger" className="writeBttn"id="followBttn">Write</Button>
        {feedData.map((data)=>{return <PostCard key={data.id} postData={data}/>})/* Rendering posts from the feed data */}
    </div>
  )
}

export default Feed