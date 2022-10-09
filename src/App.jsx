import Header from "../components/Header";
import Footer from "../components/Footer";
import Control from "../components/Control";
import Output from "../components/Output";
import { getMemes } from "../api";
import { useState } from 'react';


function App() {
  const [img, setImg] = useState("");
  const [topInput, setTopInput] = useState("");
  const [botInput, setBotInput] = useState("");

  const getInput = async (topquery,botquery) => {
    const img = await getMemes();
    setImg(img)
    setTopInput(topquery)
    setBotInput(botquery)
  }

  return (
    <>
      <Header/>
      <Control getInput = {getInput}/>
      <Output
        img={img}
        topInput={topInput}
        botInput={botInput}
      />
      <Footer/>
    </>
  );
}

export default App;
