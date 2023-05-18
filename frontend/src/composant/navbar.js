import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbare = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
   

    //   const [isConnected, setIsConnected] = useState(false);
    const checkUserAuthentication = () => {
    


      const isAuthenticated = true; 

      setIsConnected(isAuthenticated);
    };

    checkUserAuthentication();
  }, []);

  const handleLogout = () => {
    
    setIsConnected(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Poster</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
            {isConnected && <Nav.Link as={Link} to="/ajouterArticles">Ajouter un article</Nav.Link>}
          </Nav>
          <Nav>
            {isConnected ? (
              <Nav.Link onClick={handleLogout}>Déconnexion</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/connexion">Se connecter</Nav.Link>
                <Nav.Link as={Link} to="/s'enregistrer">S'enregistrer</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbare;

