import React, { useEffect, useState } from 'react'
import "./productView.css"
import { Container, Grid, Button, Typography } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

const ProductView = () => {

    const createMarkup = (text) => {
        return { __html: text };
    };

    const params = useParams()
    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {
        const response = await fetch(`http://localhost:3008/books/${id}`);
        const data = await response.json();
        const { title, price, photo, quantity, description } = data;
        setProduct({
          title,
          quantity,
          description,
          src: photo,
          price: price,
        });
      };

      useEffect(() => {
        fetchProduct(params.id)
      }, [])

  return (
    <Container className="product-view">
          <Grid container>
            <Grid item xs={12} md={6} className="image-wrapper">
              <img src={product.src} alt={product.title}
              />
            </Grid>
            <Grid item xs={12} md={5} className="text">
              <Typography variant="h2"><b>{product.title}</b></Typography>
              <hr />
              <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)} />
              <Typography variant="h3" color="secondary" >Price: <b> {product.price}$ </b> </Typography>
              <br/>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button size="large" className="custom-button" component={Link} to='/' >
                     Continue Shopping
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
  )
}

export default ProductView