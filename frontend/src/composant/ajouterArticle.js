import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AjouterArticle = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titre', titre);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:3000/api/article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // reinitialiser les champs après la soumission qui as reussi
      setTitre('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Ajouter un article</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formTitre">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
};

export default AjouterArticle;
