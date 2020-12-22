import React from "react"
import "./Sidebar.css"
import AddBoxIcon from "@material-ui/icons/AddBox"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LogoSvg from "./LogoSvg"
import IconsSvg from "./IconsSvg"

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <LogoSvg />
        <IconsSvg />
        <div className="sidebar__playlist">
          <h4 className="sidebar__playlist-h3">PLAYLISTS</h4>

          <div className="create-playlist">
            <AddBoxIcon />
            <span>Create Playlist</span>
          </div>
          <div className="liked-songs">
            <FavoriteIcon />
            <span>Liked Songs</span>
          </div>
        </div>
        <div className="useless-border"></div>
        <div className="cookies_privacy">
          <p>Cookies</p>
          <p>Privacy</p>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
