
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ArticleList = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/article');
//       setArticles(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Liste des articles</h2>
//       {articles.map(article => (
//         <div key={article._id}>
//           <h3>{article.titre}</h3>
//           <p>{article.description}</p>
//           <img src={article.image} alt="Article" />
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArticleList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Article = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/article');
//         setArticles(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article._id}>
//           <h2>{article.titre}</h2>
//           <img src={article.image} alt={article.titre} />
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Article;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    <div>
      {articles.map((article) => (
        <Card key={article._id} style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Img variant="top" src={article.image} />
          <Card.Body>
            <Card.Title>{article.titre}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Button variant="primary">Lire plus</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Article;
