import React, { lazy, Suspense } from 'react';
import Content from '../components/Content';
import Comments from '../components/Comments';

export default function Post() {
  return (
    <div
      style={{
        width: '70%',
        margin: '0 auto',
      }}
    >
      <Content />
      <Comments />
    </div>
  );
}
