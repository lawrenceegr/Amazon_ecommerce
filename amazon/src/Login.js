import React from 'react'
import { FloatingLabel , Form , Button } from 'react-bootstrap';

function Login() {
  return (
    <div>
               <br></br>
       <h4>This is a sample login page in React bootstrap.</h4>
      
      <br></br>
      <Form className='form' >
         <Form.Group>
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" placeholder="EX: JOHN DOE"  ></Form.Control>
           
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="EX: emailjs@gmail.com"  ></Form.Control>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder='password'  ></Form.Control>
         </Form.Group>
         <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
         </FloatingLabel>
 
        
          
        <Button variant='primary' >Submit</Button>

      </Form>
    </div>
  )
}

export default Login