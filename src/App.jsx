import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  

  return (
    <>
    <div className="min-h-screen w-full relative">
  {/* Soft Pastel Dream Gradient */}
  <div
    className="fixed inset-0 z-0 h-full w-full"
    style={{
      background: `linear-gradient(135deg,rgb(255, 255, 255) 0%, #FDD5B4 25%, #FFF2CC 50%, #E1F5FE 75%, #BBDEFB 100%)`,
    }}
  />

  <div className="relative z-10">
    <Navbar />
    <div className="pt-20">
      <Home />
    </div>
  </div>
</div>
    
     
    </>
  )
}

export default App