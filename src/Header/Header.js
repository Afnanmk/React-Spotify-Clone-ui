import React from "react"
import "./Header.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Header() {
  return (
    
    <div className="header">
    {/* <div className="arrowIcons">
    <NavigateBeforeIcon/>
    <NavigateNextIcon/> 
      </div> */}
      <button>SIGN UP</button>
      <button className="button-active">LOG IN</button>
    </div>
  )
}

export default Header
