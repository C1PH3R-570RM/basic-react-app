import React from 'react';
import ImageCarousel from './components/ImageCarousel';


const Carousel = () => {
    const images = [
    'https://placehold.co/500x300',
    'https://placehold.co/500x300/orange/white',
    'https://placehold.co/500x300?font=roboto',
    ];

    return (
        <div>
            
            <ImageCarousel images={images} />
        </div>
    );
};

export default Carousel;