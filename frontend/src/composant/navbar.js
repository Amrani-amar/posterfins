
// import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';


// const Navbare = () => {
//     return ( <div>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="/home">Poster</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav"> 
//             <Nav className="me-auto">
//               <Nav.Link href="/ARTICLES">articles</Nav.Link> 
//               <Nav.Link>
//                 <Link  to="/CONNEXION" >Se connecter</Link>
//                 <Link to="/S'enregistrer" >S'enregistrer</Link>
//               </Nav.Link> 
//              </Nav> 
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> 
      
  
  
//       </div>
//     )
//   }
    

 
// export default Navbare;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbare = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Poster</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ARTICLES">Articles</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/CONNEXION">
              Se connecter
            </Nav.Link>
            <Nav.Link as={Link} to="/S'enregistrer">
              S'enregistrer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbare;
