import PropTypes from 'prop-types';

function BotSearch (props) {
    const { botquery, handleOnChange2 } = props;

    return (
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
    )
  }
  
  export default BotSearch;

  BotSearch.propTypes = {
    botquery: PropTypes.string,
}