import BotSearch from "./BotSearch";
import TopSearch from "./TopSearch";
import Button from "./Button";
import { useState } from 'react';

function Control (props) {
    const { getInput } = props;
    
    const [topquery,setQuery1] = useState("");
    const [botquery,setQuery2] = useState("");

    const handleOnChange1 = (event) => {
        setQuery1(event.target.value);
      }
    
    const handleOnChange2 = (event) => {
        setQuery2(event.target.value);
      }

    const handleOnClick = () => {
        getInput(topquery,botquery)
    }

    return (
    <section className="section"> 
      <TopSearch 
          topquery = {topquery}
          handleOnChange1 = {handleOnChange1}
      />   

      <BotSearch 
          botquery = {botquery}
          handleOnChange2 = {handleOnChange2}
      />

      <Button 
          handleOnClick = {handleOnClick}
      />
    </section>
    )
  }
  
  export default Control;