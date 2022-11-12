import React, { lazy, Suspense } from 'react';
// import Comments from '../components/Comments';
import Content from '../components/Content';

const Comments = React.lazy(() => import('../components/Comments'));

export default function Post() {
  return (
    <div style={{
      width: '70%',
      margin: '0 auto',
    }}>
      <Content />
      <Suspense fallback={<p>Loading...</p>}>
        <Comments />
      </Suspense>
    </div>
  );
}
