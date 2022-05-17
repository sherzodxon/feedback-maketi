import { useContext, useRef, useState } from "react"
import "../../components/sort-modal/sort-modal"
import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import { PostsContext } from "../../App";

const Main = () => {
  const {posts} = useContext(PostsContext);
  return (
    <div className="container">
      <Control />
      <main>
      <Header />
      <div>
      {posts && posts.productRequests.map((post)=> <Card title={post.title} text={post.description} like={post.upvotes} feature
      ={post.category} key={post.id} comment={post.comments} id={post.id}/>)}
      </div>
      </main>
    </div>
  );
}

export default Main;