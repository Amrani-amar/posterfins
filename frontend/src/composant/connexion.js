// import React, { useState } from 'react';
// import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
// import axios from 'axios';

// const ConnexionForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [err, setErr] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Empêche le rechargement de la page

//     try {
//       const response = await axios.post('http://localhost:3000/api/users/login', {
//         email,
//         password,
//       }, { withCredentials: true });

//       console.log(response.data);
//     } catch (error) {
//       console.log(error.response.data.message);
//       setErr(error.response.data.message);
//     }
//   };

//   return (
//     <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
//       <div className=""></div>
//       <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
//         <MDBCardBody className="px-5">
//           <h2 className="text-uppercase text-center mb-5">Se connecter</h2>
//           <div>
//             {/* Champs de saisie */}
//             <MDBInput wrapperClass="mb-4" label="EMAIL" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <MDBInput wrapperClass="mb-4" label="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//             {/* Bouton de connexion */}
//             <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSubmit}>SE CONNECTER</MDBBtn>
//             {/* Affichage des erreurs */}
//             {err ? <h4>{err}</h4> : null}
//           </div>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };

// export default ConnexionForm;

import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConnexionForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password,
      }, { withCredentials: true });

      console.log(response.data);
      navigate("/Articles")

    } catch (error) {
      console.log(error.response.data.message);
      setErr(error.response.data.message);
    }
  };

  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image"
     style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', height: '91vh' }}>
      <div className="connexion-form-container">
        <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Se connecter</h2>
            <div>
              {/* Champs de saisie */}
              <MDBInput wrapperClass="mb-4" label="EMAIL" size="lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass="mb-4" label="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              {/* Bouton de connexion */}
              <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSubmit}>SE CONNECTER</MDBBtn>
              {/* Affichage des erreurs */}
              {err ? <h4>{err}</h4> : null}
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
};

export default ConnexionForm;
