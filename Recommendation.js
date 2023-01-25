import React from 'react'
import "../App.css"
import img1 from "../Assets/Vitamins.jpg"
import img2 from "../Assets/Skincare.jpg"
import img3 from "../Assets/Bp.jpg"
import img4 from "../Assets/Petsfood.png"
import 'animate.css/animate.min.css'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';



const ItemCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.1,
        transition: { duration: 0.2 },
      });
    } else {
      controls.start({
        scale: 1,
        transition: { duration: 0.2 },
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div 
      className="item-card" 
      style={{width: '280px', border: '1px solid black', margin: '20px',float:'left'}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: '80%'  }} />
      <p>{item.description}</p>
    </motion.div>
  )
}


  

  const Recommendation = () => {
    const items = [
      { name: 'item 1', image: img1, description: 'This is item 1' },
      { name: 'item 2', image: img2, description: 'This is item 2' },
      { name: 'item 3', image: img3, description: 'This is item 3' },
      { name: 'item 4', image: img4, description: 'This is item 4' },
    ]
  
    return (
      <div className='rec' style={{overflow:'hidden' ,}}>
        <h1 style={{textAlign:'left'}}>Recommended for you</h1>
        {items.map(item => (
          <ItemCard className="card" key={item.name} item={item} />
        ))}
      </div>
    )
  }
  

export default Recommendation
