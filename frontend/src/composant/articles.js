
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/article');
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Row>
      {articles.map((article) => (
        <Col key={article._id} xs={12} md={6} lg={4} xl={3} className="mb-4">
          <Card style={{ height: '100%' }}>
            <Card.Img variant="top" src={article.image} style={{ width: '100%', height: 'auto' }} />
            <Card.Body>
              <Card.Title className="h2">{article.titre}</Card.Title>
              <Card.Text className="mb-2">{article.description}</Card.Text>
              <Button variant="primary" className="btn-sm">Lire plus</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Article;

