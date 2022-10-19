import { NewsData } from "./components/NewsData";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import {Route,Routes} from "react-router-dom"
import { Footer } from "./components/Footer";

function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/news" element={<NewsData/>}/>
    </Routes>
    <Footer/>
    {/* <NewsData/> */}
   </>
  );
}

export default App;
