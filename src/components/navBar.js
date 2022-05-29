import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

//Navigation bar component
function NavBar({page,setPage}) {
  return (
    <div id='navigation'>
        <Navbar bg="light" variant="light">
            <Container id="navBar">
                <Navbar.Brand href="#" id="navLogo">TweetX</Navbar.Brand>
                <Nav className="me-auto" id="navLinks">
                    <Nav.Link className={page==="feed"?"active":"notActive"} onClick={()=>setPage("feed") /* Changing page of dashboard */}>Feed</Nav.Link>
                    <Nav.Link className={page==="users"?"active":"notActive"} onClick={()=>setPage("users") /* Changing page of dashboard */}>Users</Nav.Link>
                    <Nav.Link className={page==="profile"?"active":"notActive"} onClick={()=>setPage("profile") /* Changing page of dashboard */}>Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar