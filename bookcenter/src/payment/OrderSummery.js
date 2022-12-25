import React from 'react'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartStore } from '../store/cartSlice';

const OrderSummery = () => {
    const {cart} = useSelector(state=>state.cartStore)


    const total = cart.reduce((acc, product)=>{
        acc += product.price * product.quantity
        return acc
        },0)
        

    console.log(cart)
    return (
        <Box>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      
    {cart.map((product) => (
        <ListItem style={{ padding: '10px 20px' }} key={product.id}>
          <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 20px' }}>
      <ListItemText primary="Total" />
      <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
      {total}
      </Typography>
    </ListItem>
    </List>
  </Box>
    )
}

export default OrderSummery