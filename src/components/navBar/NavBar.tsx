import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

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
      <HomeIcon />
      <FavoriteIcon />
    </Box>
    </div>
  );
  
}