import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar() {

  return (
    <div>
          <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="products">
        <ShoppingBagIcon />
      </Link>
      <Link to="favorites">
         <FavoriteIcon />
      </Link>
      <Link to="cart">
        <ShoppingCartCheckoutIcon />
      </Link>
      <Link to="about">
        About us
      </Link>

    </Box>
    </div>
  );
  
}