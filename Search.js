import React from 'react'
import vid from "../Assets/Vid.mp4";
import "../App.css"

const Search = () => {
  return (
    
      <div className="home">
         
         <video src={vid} autoPlay loop muted></video>
         
        <div className='content'>
        <div className='newslatter'>
        <form>
        <input type="text" placeholder='Search'/>
        <input className='button' type="button" value="Search"/>
        </form>
      </div>
        </div>
    </div>
  )
}

export default Search;