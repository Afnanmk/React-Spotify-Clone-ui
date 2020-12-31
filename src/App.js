import "./App.css"
import AlbumInfo from "./Feed/AlbumInfo"
import Albums from "./Feed/Albums"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Sidebar from "./sidebar/Sidebar"

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <AlbumInfo />
      </div>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
