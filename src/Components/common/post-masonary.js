import React from 'react';
import {MasonaryPost} from './';

export default function PostMasonary ({posts,columns,tagsOnTop}) {

  return (
    <section className="masonary" style={{gridTemplateColumns:`repeat(${columns},minmax(275px,1fr))`}}>
      {posts.map((post,index)=>
        <MasonaryPost {...{post,index,tagsOnTop,key:index}} />
      )}
    </section>
  )

}