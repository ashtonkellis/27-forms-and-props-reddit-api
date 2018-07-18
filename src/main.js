import React from 'react';
import { render as renderDom } from 'react-dom';
import superagent from 'superagent';
import SearchForm from './components/search-form/searchForm';
import SearchResultList from './components/search-result-list/searchResultList';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      searchIsError: false,
    };
  }

  searchMethod = (search, limit) => {
    return superagent.get(`https://www.reddit.com/r/${search}.json?limit=${limit}`)
      .then((data) => {
        this.setState({ 
          searchIsError: false, 
          topics: data.body.data.children, 
        });
        console.log(this.state.topics, 'STATE.TOPICS FROM MAIN.JS');
      })
      .catch((err) => {
        console.error(err, 'ERROR FROM MAIN JS');
        this.setState({ searchIsError: true });
      });
  }
  
  render() {
    return (
      <div className="container">
        <SearchForm
          className= { this.state.searchIsError ? 'error' : ''}
          searchMethod={ this.searchMethod }
        ></SearchForm>
        <SearchResultList
          topics={ this.state.topics }
        ></SearchResultList>
      </div>
    );
  }
}

const root = document.createElement('div');
// root.className('container');
document.body.appendChild(root);
renderDom(<App />, root);

/* 
###### App Component
* should contain all of the **application state** 
* should contain methods for modifying the application state
* the state should have a topics array for holding the results of the search
*/
