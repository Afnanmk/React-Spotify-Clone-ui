import React from "react"
import "./Footer.css"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"

function NowPlaying() {
  return (
    <>
      <div className="footer__left" role="contentinfo">
        <img
          src="https://images.unsplash.com/photo-1608839968395-12aed2154570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          className="album_image"
          alt="albumImage"
        />
        <div class="album_info">
          <h5>Peacful World</h5>
          <p>Maher Zain</p>
        </div>
        <div className="footer__left-icons">
          <p>
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              class="Svg-ulyrgf-0 hJgLcF"
            >
              <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
            </svg>
          </p>
          <p>
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              class="Svg-ulyrgf-0 hJgLcF"
              id="footer__leftIcon"
            >
              <g fill="#b3b3b3" fill-rule="evenodd">
                <path
                  d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                  fill-rule="nonzero"
                ></path>
                <path d="M10 8h4v3h-4z"></path>
              </g>
            </svg>
          </p>
        </div>
      </div>
      <div className="footer__center">
        <p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 hJgLcF"
          >
            <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path>
          </svg>
        </p>
        <p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 hJgLcF"
          >
            <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
          </svg>
        </p>
        <p>
          <button
            className="control-button"
            style={{
              borderRadius: "32px",
              padding: 0,
              transitionProperty: "all",
              border: "1px solid #b3b3b3",
              width: "32px",
              height: "32px",
              color: "#b3b3b3",
              background: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
            title="Play"
            aria-label="Play"
            data-testid="control-button-play"
          >
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="Svg-ulyrgf-0 hJgLcF"
            >
              <path d="M4.018 14L14.41 8 4.018 2z"></path>
            </svg>
          </button>
        </p>
        <p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 hJgLcF"
          >
            <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
          </svg>
        </p>
        <p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 hJgLcF"
          >
            <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"></path>
          </svg>
        </p>
      </div>
      <div className="footer__right">
        <p>
          <PlaylistPlayIcon />
        </p>
        <p>
          <VolumeUpIcon />
        </p>
        <p>
          <input type="range"></input>
        </p>
      </div>
    </>
  )
}

export default NowPlaying
