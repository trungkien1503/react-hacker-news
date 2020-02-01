export function fetchStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_STORIES'});
    return (
      fetch('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=30')
      .then(response => response.json())
      .then(storyIds => {
        storyIds.map(function(id) {
          return (
            // fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            fetch(`http://localhost:3000/api/v1/posts/${id}.json`)
            .then(response => response.json())
            .then(story => {
              dispatch({type: 'FETCHING_STORIES', payload: story})
              })
          )
        })
      })
    )
  }
}
