import { Route, Routes } from "react-router-dom";
import AddFeedback from "./screens/add-feedback/add-feedback";
import EditFeedback from "./screens/edit-feedback/edit-feedback";
import Feedback from "./screens/feedback/feedback";
import Kanban from "./screens/kanban/kanban";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";

import "./sass/main.scss";
import { createContext, useEffect, useState } from "react";
export const PostsContext =createContext();

function App() {
  const [posts ,setPosts]=useState(null);

  useEffect(()=>{
    fetch('/data.json')
    .then(response=> response.json())
    .then(data=>setPosts(data))
  },[]);

  if(!posts){
    return null
  }
  return (
    <PostsContext.Provider value={{posts,setPosts}}>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={`/feedback/:id`} element={<Feedback />} />
      <Route path="/add-feedback" element={<AddFeedback />} />
      <Route path="/edit/:id" element={<EditFeedback />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </PostsContext.Provider>
  )
}

export default App;
