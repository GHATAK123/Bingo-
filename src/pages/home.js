import React from "react";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";
import { MasonaryPost, PostMasonary,PostGrid } from "../Components/common";


const trendingConfig = {
  1: {
    gridArea: "1 /2 /3/3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1/1/2/3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Prakash Anand"
    post.description = "Web devlopment"
  });
};

const recentPosts = [...trending,...featured,...featured]

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Home() {
  return (
    <main className="home">
      <section className="container ">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonary posts={featured} columns={2} tagsOnTop={true} />
            <MasonaryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>


      <section className="bg-white">
      <section className="container ">
        <div className="row">
          <h1>Recent Posts</h1>
        <PostGrid posts={recentPosts} />
        </div>
      </section>

      </section>
     


      <section className="container ">
        <div className="row">
        <PostMasonary posts={trending} columns={3} />
        </div>
      </section>
     
    </main>
  );
}
