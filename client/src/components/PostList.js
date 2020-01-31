import React from 'react';

export default function postList(props) {
    return (
      <div>
        {props.loading ? "...Posts Loading" : props.posts}
      </div>
    )
}
