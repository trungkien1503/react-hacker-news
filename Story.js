import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStory } from '../actions/singleStoryAction';
import StoryShow from '../components/storyShow';

class Story extends Component {

  componentDidMount() {
    this.props.fetchSingleStory(this.props.match.params.id);
  }

  render() {
    const story = this.props.story;
    return (
      <StoryShow story={story} loading={this.props.loading} />
    )
  }
}

const mapStatetoProps = state => {
  return {
    story: state.storyReducer.singleStory,
    loading: state.storyReducer.loading
  }
}
export default connect(mapStatetoProps, {fetchSingleStory})(Story)
