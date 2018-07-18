import React from 'react';
import PropTypes from 'prop-types';

export default class SearchResultList extends React.Component {
  render() {
    return (
      this.props.topics
        ? <ul className="search-result-list">
            {
              this.props.topics.map((topic, i) => {
                const { title, url, ups } = topic.data;
                return <li key={i}><a href={url}>
                  <h3>{title}</h3>
                  <p>{ups}</p>
                </a></li>;
              })
            }
          </ul>
        : null
    );
  }
}

SearchResultList.propTypes = {
  topics: PropTypes.array,
};
