
import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        nom,
        prenom,
        email,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      navigate("/CONNEXION")

    } catch (error) {
      console.log(error.response.data.message);
      setErr(error.response.data.message);
    }
  };

  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image"
     style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height: '91vh' }}>
      <div className="register-form-container">
        <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Créer un compte</h2>
            <div>
              {/* Champs de saisie */}
              <MDBInput wrapperClass="mb-4" label="NOM" size="lg" type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

              <MDBInput wrapperClass="mb-4" label="PRENOM" size="lg" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

              <MDBInput wrapperClass="mb-4" label="EMAIL" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass="mb-4" label="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              {/* Bouton d'inscription */}
              <MDBBtn className="mb-4 w-100 " size="lg" onClick={handleSubmit}>S'ENREGISTRER</MDBBtn>
              {/* Affichage des erreurs */}
              {err ? <h4>{err}</h4> : null}
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
};

export default RegisterForm;
