import { Avatar, Comment, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((res) => {
          console.log({ res });
          setComments(res);
        });
    }, 10000);
  }, []);

  return (
    <div style={{ height: 300, padding: 10, border: '1px solid black', overflowY: 'auto' }}>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} author={<a>{comment.email}</a>} content={<p>{comment.body}</p>} />
      ))}
    </div>
  );
}
