import { Route, Routes } from "react-router-dom";
import AddFeedback from "./screens/add-feedback/add-feedback";
import EditFeedback from "./screens/edit-feedback/edit-feedback";
import Feedback from "./screens/feedback/feedback";
import Kanban from "./screens/kanban/kanban";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";
import DataProvider from "./contexts/data";

import "./sass/main.scss";
import Head from "./screens/head/head";
function App() {

  return (
    <DataProvider>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={`/feedback/:id`} element={<Feedback />} />
      <Route path="/add-feedback" element={<AddFeedback />} />
      <Route path={`/edit-feedback/:id`} element={<EditFeedback />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </DataProvider>
  )
}

export default App;
