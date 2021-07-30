import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

function ImageList(props) {

    // return props.images.map((images) => {
    //     return <img alt={images.description} key={images.id} src={images.urls.regular} />;
    //     // return <div alt={images.description} key={images.id}> 
    //     //   <img  src={images.urls.regular}/>
    //     //  </div>
    // });

    //  ---------------------------------------
     const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image= {image}/>
     });
    return <div className="image-list"> {images} </div>;
}

export default ImageList;