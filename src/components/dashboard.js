import React,{useState} from 'react'
import Feed from './feed';
import Profile from './profile';
import Users from './users';
import NavBar from './navBar';

function Dashboard() {
  const[page,setPage]=useState('feed') //to handle the current page of dashboard
  return (
    <>
      {<NavBar setPage={setPage} page={page}/> /* Navigation bar */}
      {page==='feed' && <Feed/>/* Feeds page */}
      {page==='users' && <Users/>/* Users page */}
      {page==='profile' && <Profile/>/* Profile page */}
    </>
  )
}

export default Dashboard