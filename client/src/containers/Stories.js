import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom';
import StoriesList from '../components/storiesList';

class Stories extends Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const list = this.props.stories.map((story, index) => {
      return (
        <div className="col-xs-6 col-sm-3" key={index}>
          <Link to={`stories/${story.id}`} className="story-link">
            <div className="card iwa-card mb-10">
              <div className="card-body">
                <h6 className="card-title">{story.title}</h6>
                <div className="card-subtitle mb-10 small">{story.domain}</div>
                <img src={story.cover_image_url} className="img-fluid img-thumbnail card-img-top mb-10"/>
                <div className="text-card-footer text-muted">{story.score} points by {story.by} {story.time_ago} ago | {story.descendants} comments</div>
              </div>
            </div>
          </Link>
        </div>
      )
    })

    return (
      <StoriesList list={list} loading={this.props.loading} />
    )
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading
  }
}
export default connect(mapStatetoProps, {fetchStories})(Stories)
