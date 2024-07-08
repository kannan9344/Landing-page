import { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content/Content";
import Category from "./Components/Cetegory/Category";
import Own from "./Components/Own/Own";
import Testimonial from "./Components/Testimonial/Testimonial";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
export const DataContext = createContext();
function App() {
  const [activeTab, setActivetab] = useState(0);
  const [toggle,setToggle]=useState(false);
  return (
    <DataContext.Provider value={{ activeTab, setActivetab,toggle,setToggle }}>
      <Header setToggle={setToggle} toggle={toggle} />
      <Content activeTab={activeTab} setActivetab={setActivetab} />
      <Category />
      <Own />
      <Testimonial />
      <Banner />
      <Footer />
      <Modal activeTab={activeTab} setActivetab={setActivetab} toggle={toggle} />
    </DataContext.Provider>
  );
}

export default App;
