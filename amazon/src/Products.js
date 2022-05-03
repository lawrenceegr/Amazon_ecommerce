import React from 'react';
import { Image , Container ,Row , Col ,Card ,Accordion} from 'react-bootstrap';
import Fighter from './Assets/Fighter.jpeg';
import Comps from './Assets/Computer Accesorries/comps.jpg';
import Deal from './Assets/Deal of the day/deal.jpg';
import Dress from './Assets/Dresses/dress.jpg';
import Chairs from './Assets/Gaming accesories/Chairs.jpg';
import Headsets from './Assets/Gaming accesories/Headset.jpg';
import Keyboard from './Assets/Gaming accesories/keyboard.jpg';
import Mouse from './Assets/Gaming accesories/mouse.jpg';
import Health from './Assets/Health And Personal Care/health.jpg';
import Arabis from './Assets/Most Wished for Movies AND tv/arabis.jpg';
import Batman from './Assets/Most Wished for Movies AND tv/batman.jpg';
import Belle from './Assets/Most Wished for Movies AND tv/bellle.jpg';
import Dark  from './Assets/Most Wished for Movies AND tv/DarkStalkers.jpg';
import Dune from './Assets/Most Wished for Movies AND tv/dune.jpg';
import Heavy from './Assets/Most Wished for Movies AND tv/heavy.jpg';
import Lord from './Assets/Most Wished for Movies AND tv/Lord of rings.jpg';
import Moonfall from './Assets/Most Wished for Movies AND tv/moonfall.jpg';
import Rain from './Assets/Most Wished for Movies AND tv/rain.jpg';
import Spiderman1 from './Assets/Most Wished for Movies AND tv/spide-man.jpg';
import Spiderman2 from './Assets/Most Wished for Movies AND tv/spiderman2.jpg';
import Spiderman3 from './Assets/Most Wished for Movies AND tv/spiderman3.jpg';
import Batman2 from './Assets/Most Wished for Movies AND tv/the batman.jpg';
import Father from './Assets/Most Wished for Movies AND tv/thegodfather.jpg';
import Uncharted from './Assets/Most Wished for Movies AND tv/uncharted.jpg';
import Ship from './Assets/Ship/ship.jpg';
import Gift from './Assets/Shop Motors day gifts/Gift.jpg';


function Products() {
  return (
  
    <div className='products'> 
    <Container>
    <Row>
    <Col xs={4} md={3}> <Card border="secondary" style={{ width: '18rem' ,marginRight:'40px'}}>
  <Card.Header>Gaming Accesorries</Card.Header>
  <Card.Body>

    <Card.Text>
      <Row>
        <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Headsets} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/>Headsets
  </Col>
  <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Keyboard} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/>Keyboards
  </Col>
  
        </Row>
        <br></br>
        <Row>
        <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Mouse} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/>Computer mices
  </Col>
  <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Chairs} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/><p>Chairs</p>
  </Col>
  <a href='...'>Shop Now</a>
        </Row>
    </Card.Text>
  </Card.Body>
</Card></Col>
    <Col xs={4} md={3}> <Card border="secondary" style={{ width: '18rem' ,marginRight:'40px'}}>
  <Card.Header>Movies</Card.Header>
  <Card.Body>

    <Card.Text>
      <Row>
        <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Batman} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/><Card.Text>Batman</Card.Text>
  </Col>
  <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Uncharted} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/><Card.Text>Uncharted</Card.Text>
  </Col>
  
        </Row>
        <br></br>
        <Row>
        <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Rain} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/><Card.Text>Rain</Card.Text>
  </Col>
  <Col xs={6} md={6}style={{ width: '7rem' }}> 
  <Image src={Spiderman1} style={{   height:'100%' ,width:'100%', objectFit:'contain'
      }}/> <Card.Text>Spiderman</Card.Text>
  </Col>
  <br></br>
  <a href='...'>Shop Now</a>
  <br></br>
        </Row>
    </Card.Text>
  </Card.Body>
</Card></Col>
      <Col xs={4} md={3}> <Card border="secondary" style={{ width: '18rem' ,marginRight:'40px'}}>
  <Card.Header>Electronics</Card.Header>
  <Card.Body>
    
    <Card.Text>
      <Image src={Comps} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/>
    </Card.Text>
    <Card.Title>Electronics</Card.Title><a href='...'>Shop Now</a>
  </Card.Body>
</Card></Col>
      <Col xs={4} md={3}> <Card border="secondary" style={{ width: '18rem' ,marginRight:'40px'}}>
  <Card.Header>Header</Card.Header>
  <Card.Body>
    
    <Card.Text>
      <Image src={Fighter} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/><a href='...'>Shop Now</a>
    </Card.Text>
  </Card.Body>
</Card></Col>
    
</Row>
</Container>
<br></br>
<br></br>
<Container>
<Row >

  <Col xs={4} md={3}> <Card border="secondary" style={{ width: '18rem' ,marginRight:'40px'}}>
  <Card.Header>Shop Mother's Day Gifts</Card.Header>
  <Card.Body>
    
    <Card.Text>
      <Image src={Gift} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/><a href='...'>Shop Now</a>
    </Card.Text>
  </Card.Body>
</Card></Col>
  <Col xs={4} md={3}>  <Card border="success" style={{ width: '18rem' ,marginRight:'40px', justifyItems : 'center'}}>
  <Card.Header>Dresses</Card.Header>
  <Card.Body>
    <Card.Text>
      <Image src={Dress} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/><a href='...'>Shop Now</a>
    </Card.Text>
  </Card.Body>
</Card></Col>
<Col xs={4} md={3}>  <Card border="success" style={{ width: '18rem' ,marginRight:'40px', justifyItems : 'center'}}>
  <Card.Header>Deal of the Day</Card.Header>
  <Card.Body>
    <Card.Text>
      <Image src={Deal} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/><a href='...'>Shop Now</a>
    </Card.Text>
  </Card.Body>
</Card></Col>
<Col xs={4} md={3}>  <Card border="success" style={{ width: '18rem' ,marginRight:'40px', justifyItems : 'center'}}>
  <Card.Header>Computer & Accesorries</Card.Header>
  <Card.Body>
    <Card.Text>
      <Image src={Comps} style={{
        height:'100%' ,width:'100%', objectFit:'contain'
      }}/><a href='...'>Shop Now</a>
    </Card.Text>
  </Card.Body>
</Card></Col>

</Row>
</Container>
<div className='movies' style={{
    maxHeight:'18rem',
    display:'flex',
    width:'100%',
    
    overflowY:'auto',
    position:'absolute',
    whiteSpace:'nowrap'

}}>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
    <Image src={Batman} style={{height:'18rem',width:'18rem',objectFit:'contain',margin:'0',flex :'0 0 auto'}}/>
</div>

{/****************Accordion used to hide extra text.****************/}

  <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>More Information</Accordion.Header>
          <Accordion.Body>
             Product Features. Amazon Shopping offers app-only benefits to help    make shopping on Amazon faster and easier than shopping on your desktop.
             Rating: 4.6 · ‎2,929,903 votes · ‎Free · ‎Android · ‎Shopping
          </Accordion.Body>
        </Accordion.Item>
    </Accordion>  
   </div>   
    
  )
}

export default Products