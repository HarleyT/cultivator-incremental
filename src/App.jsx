import './index.css'

import Hero from "./pages/Hero";
import Settings from "./pages/Settings";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Hero />
        {/* <Settings /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App;