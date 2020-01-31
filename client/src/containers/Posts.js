import React, { Component } from 'react';
import PostList from '../components/PostList';
import { connect } from 'react-redux';
import fetchPosts from '../actions/postsFetchAction';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const posts = this.props.posts.slice(0).reverse().map((post, index) => {
      let postDate = new Date(post.created_at)
      let dateString = postDate.toDateString()

      return(
        <Card body key={post.id} border="light">
          <Card.Header>
            Created at: {dateString};
          </Card.Header>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card>
      )
    })

    return (
      <div>
        <PostList posts={posts} loading={this.props.loading} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading
  }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)
