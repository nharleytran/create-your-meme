import PropTypes from 'prop-types';

function TopSearch (props) {
    const { topquery, handleOnChange1 } = props;

    return (
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
    )
  }
  
  export default TopSearch;

  TopSearch.propTypes = {
    topquery: PropTypes.string,
}