import React from 'react';
import PropTypes from 'prop-types';
import './searchForm.scss';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'explainlikeimfive',
      limit: 10,
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchMethod } = this.props;
    const { search, limit } = this.state;
    return searchMethod(search, limit);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>Subreddit
          <input 
            name="search"
            value= { this.state.search }
            onChange= { this.handleInputChange }
          />
        </label>
        <label>Max Results
          <input 
            type="number"
            min="0"
            max="100"
            name="limit"
            value= { this.state.limit }
            onChange= { this.handleInputChange }
          />
        </label>
        <input type="submit"/>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchMethod: PropTypes.func,
};
