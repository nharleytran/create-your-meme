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

    const handleOnClick = (event) => {
        console.log("GOOOOO")
        getInput(topquery,botquery)
    }

    return (
    <section className="section">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-large is-fullwidth is-family-monospace"
            placeholder="Top text"
            type="text"
            value = {topquery}
            onChange={handleOnChange1}
          />
        </div>
      </div>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-large is-fullwidth is-family-monospace"
            placeholder="Bottom text"
            type="text"
            value = {botquery}
            onChange={handleOnChange2}
          />
        </div>
      </div>
      <div className="field has-addons">
        <div className="control is-expanded">
          <button 
            onClick = {handleOnClick}
            className="button is-link is-large is-fullwidth" 
          >
            Go!
          </button>
        </div>
      </div>
    </section>
    )
  }
  
  export default Control;