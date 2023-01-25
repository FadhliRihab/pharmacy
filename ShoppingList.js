import React, { useState } from 'react'
import img1 from "../Assets/Medicine.png"
import img2 from "../Assets/Bp.png"
import img3 from "../Assets/Skin.png"
import img4 from "../Assets/Pet.png"

import "../App.css"

const ShoppingList = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const images = [ { src: "https://i.pinimg.com/736x/31/d1/46/31d146814df300b37c413e8b3a5c1870.jpg", alt: 'Image 1' }, { src: img2, alt: 'Image 2' }, { src: img3, alt: 'Image 3' }, { src: img4, alt: 'Image 4' } ];

const handleNext = () => {
if(currentIndex === images.length - 1) {
setCurrentIndex(0);
} else {
setCurrentIndex(currentIndex + 1);
}
};

const handlePrev = () => {
if(currentIndex === 0) {
setCurrentIndex(images.length - 1);
} else {
setCurrentIndex(currentIndex - 1);
}
};

const goToSlide = (index) => {
setCurrentIndex(index);
}

return (

<div className='carousel-container'>
<div className='carousel-slides-container' style={{
position: 'relative',
width: '100%',
height: '200px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
backgroundColor:"#4c5220"
}}>
{images.map((image, index) => (
<img
key={image.src}
src={image.src}
alt={image.alt}
style={{
position: 'absolute',
width: '100%',
height:'100%',
display: index === currentIndex ? 'block' : 'none'
}}
/>
))}
</div>
<div className="btn-group">
<button className="prev-btn" onClick={handlePrev}>Previous</button>
<button className="next-btn" onClick={handleNext}>Next</button>
</div>
<div className="dots-container">
{images.map((_, index) => (
<button key={index} onClick={() => goToSlide(index)} className={`dot ${index === currentIndex ? 'active' : ''}`}>
</button>
))}
</div>
</div>
);
}
export default ShoppingList;