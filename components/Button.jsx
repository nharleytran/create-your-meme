function Button (props) {
    const { handleOnClick } = props;

    return (
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
    )
  }
  
  export default Button;