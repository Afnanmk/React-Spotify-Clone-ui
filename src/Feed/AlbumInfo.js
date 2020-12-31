import React, { useEffect, useState } from "react"
import "./AlbumInfo.css"
import ButtonPlay from "./ButtonPlay"

function AlbumInfo() {
  const [items1, setItems1] = useState([""])
  const [items2, setItems2] = useState([""])
  const [items3, setItems3] = useState([""])
  
// SECTION 1
  useEffect(async () => {
    const response = await fetch("albums1.json")
    const data = await response.json()
    
    setItems1(data)
    
  }, [])

  // SECTION 2
  useEffect(async () => {
    const response = await fetch("albums2.json")
    const data = await response.json()
    
    setItems2(data)
    
  }, [])

// SECTION 3
useEffect(async () => {
    const response = await fetch("albums3.json")
    const data = await response.json()
    
    setItems3(data)
    
  }, [])


  return (
    
    <div className="album-info">
    {/* SECTION 1 */}
      <section className="album-section">
        <div class="album-info__header">
          <h2>Stay up to date</h2>
          <span>SEE ALL</span>
        </div>
        
          <div className="album-info__cards">
          {items1.map((item1) => (
            <div  className="album-info__card">
              
                <div className="image-playbtn">
                  <img src={item1.image} alt="" className="card-img" />
                  <ButtonPlay />
                </div>
                <div className="card-info">
                  <div className="card-title">{item1.title}</div>
                  <div class="card-description">{item1.description}</div>
                </div>
              
            </div>
            ))}
            </div>
      
      </section>

      {/* SECTION 2 */}
      <section className="album-section">
        <div class="album-info__header">
          <h2>Focus</h2>
          <span>SEE ALL</span>
        </div>
        <div className="album-info__cards">
        {items2.map((item2) => (
          <div className="album-info__card">
            
              <div className="image-playbtn">
                <img
                  src={item2.image}
                  alt=""
                  className="card-img"
                />
                <ButtonPlay />
              </div>
              <div className="card-info">
                <div className="card-title">{item2.title}</div>
                <div class="card-description">
                  {item2.description}
                </div>
              </div>
            
          </div>
          ))}

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="album-section">
        <div class="album-info__header">
          <h2>Mood</h2>
          <span>SEE ALL</span>
        </div>
        <div className="album-info__cards">
        {items3.map((item3) => (
          <div className="album-info__card">
            
              <div className="image-playbtn">
                <img
                  src={item3.image}
                  alt=""
                  className="card-img"
                />
                <ButtonPlay />
              </div>
              <div className="card-info">
                <div className="card-title">{item3.title}</div>
                <div class="card-description">
                  {item3.description}
                </div>
              </div>
            
          </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default AlbumInfo
