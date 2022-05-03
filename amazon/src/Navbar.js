import React from 'react'
import Amazon from './Assets/amazon.png';
import { Image ,Navbar , Container , Nav ,NavDropdown , Form} from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function NavBar() {
  return (
    <div>
             <Navbar bg="dark" expand="lg">
  <Container fluid text-color='#fff'>
    <Navbar.Brand href="#"><Image src={Amazon}    
      width="30"
      height="30"
    />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' ,
      color: 'white'}}
        navbarScroll
      >
        <Nav.Link href="#action1"   style={{ 
      color: 'white'}} ><b>Kenya</b></Nav.Link>
        
        <NavDropdown title="All " id="navbarScrollingDropdown" bg='light' className="header__dropdown">
          <NavDropdown.Item href="#action3" style={{ 
      color: 'white'}} >Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4"  >Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5"  >
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        
      <div className="header__search">
        <input className="header__searchInput" type="text"   style={{ 
            width : '600px' ,
            marginRight :'0' 
          
          }}/>
        <SearchIcon className="header__searchIcon" />
      </div>

           <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar