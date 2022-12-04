import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../assets/img/itemData';

export default function StandardImageList() {
  const pantalla = window.screen.width
  return (
    <ImageList sx={{ width: "85%", height: "50%", margin: "auto"}} cols={(pantalla <750) ? 1 : 3} rowHeight={250}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{width:250, height:200, borderRadius: "3%"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

