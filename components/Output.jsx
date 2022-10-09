import PropTypes from 'prop-types';

function Output (props) {
  const {img, topInput, botInput} = props;

    return (
      <section className="section is-medium pt-0 pb-6 has-text-centered" >
        <article className="message is-medium" >
          <div className="message-body">
            <div className="meme">
              <img src = {img} width="800rem" height="auto"/>
              <h2 className="top">{topInput}</h2>
              <h2 className="bottom">{botInput}</h2>
            </div>
          </div>
        </article>
      </section>
    );
  }
  
  export default Output;

  Output.propTypes = {
    img: PropTypes.string,
    topInput: PropTypes.string,
    botInput: PropTypes.string
}