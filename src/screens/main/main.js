import Card from "../../components/card/card";
import Control from "../../components/control/control";
import Header from "../../components/header/header";
import { useData } from "../../contexts/data";

const Main = () => {
  const {posts, setPosts} = useData();

  
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