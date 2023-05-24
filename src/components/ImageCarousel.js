import React, { useState} from 'react';
 


const ImageCarousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
   

    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length -1 : prevImage -1));
    };

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage ===images.length -1 ? 0 : prevImage + 1 ));
    };

    return (
        <div className="carousel">
            <button onClick={previousImage}>Previous</button>
                <img src={images[currentImage]} alt="carousel" />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default ImageCarousel;