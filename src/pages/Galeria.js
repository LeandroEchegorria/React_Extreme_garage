import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from '../assets/img/itemData';

export default function StandardImageList() {

  return (
    <ImageList sx={{ width: 950, height: 650, margin: "auto"}} cols={3} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{width:250, height:200, borderRadius: "20%"}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

