import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { t5 } from '../tshirt/t5.webp';
import { t6 } from '../tshirt/t6.webp';
import { t7 } from '../tshirt/t7.webp';
import { t9 } from '../tshirt/t9.webp';
import { t0 } from '../tshirt/t0.webp';
import { t12 } from '../tshirt/t12.webp';
import { t13 } from '../tshirt/t13.webp';
import { t14 } from '../tshirt/t14.webp';
import fassured from '../tshirt/fassured.png';
import './cardpro.css';
// import { Height } from '@material-ui/icons';
var data1 = [
    {
        src: require('../tshirt/t5.webp'),
        title: "levi's",
        description: "men polo t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only 4 left",
        size: "s,m,l,xxl"
    },
    {
        src: require('../tshirt/t6.webp'),
        title: "duke",
        description: " t-shirt",
        amount: "₹400",
        price: "800",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: require('../tshirt/t7.webp'),
        title: "U.S. POLO ASSN.",
        description: "large t-shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: require('../tshirt/t8.webp'),
        title: "puma",
        description: "men t-shirt",
        amount: "₹900",
        price: "1800",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: require('../tshirt/t9.webp'),
        title: "strauss",
        description: "Men Striped Polo T-Shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: require('../tshirt/t12.webp'),
        title: "puma",
        description: "black t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    },
    {
        src: require('../tshirt/t13.webp'),
        title: "puma",
        description: "white t-shirt",
        amount: "₹1000",
        price: "2000",
        discount: "50%",
        inventory: "only 6 left",
        size: "s,m"
    },
    {
        src: require('../tshirt/t14.webp'),
        title: "ck",
        description: "blue t-shirt",
        amount: "₹650",
        price: "1300",
        discount: "50%",
        inventory: "only few left",
        size: "s,m,l,xl,xxl"
    }
];

function card(i) {
    const prod = data1[i];

    return (
        <Card className='mt-3 mx-1  mx-auto' sx={{ maxWidth: 240 }}>
            <CardActionArea>
                <CardMedia
                    className='rounded-3  p-1 mt-2'
                    component="img"
                    height={280}
                    width={150}
                    image={prod.src}
                    alt={prod.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {prod.title}
                    </Typography>
                    <Typography variant="body2" className='' color="text.secondary">
                        {prod.description}
                        <img src={fassured} className='ms-2 fassured' />
                    </Typography>
                    <span class="amount">{prod.amount}</span>
                    <del id="price" class="text-secondary ms-2 price">₹{prod.price}</del>
                    <span class="text-success ms-2 discount">{prod.discount} off</span>
                    <br /><span class="text-success inventory"><b>{prod.inventory}</b></span>
                    <br /><span class="size text-uppercase">Size: {prod.size}</span>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant='contained' size="small" color="primary">
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
}

function MultiActionAreaCard() {
    return (
        <>
            {
                data1.map((v, i) => (
                    <>
                        {card(i)}
                    </>

                ))
            }
        </>
    );
}

export default MultiActionAreaCard;