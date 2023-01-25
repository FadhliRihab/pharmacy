import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{
      backgroundColor: "black",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' ,
      top: '249%'
    }}>
      <p style={{color: 'white', fontSize: '14px'}}>Copyright © {currentYear} MyCompany. All rights reserved.</p>
    </footer>
  );
}

export default Copyright;
