import { useParams } from "react-router-dom";

const EditFeedback = () => {
  const { id } = useParams();

  return (
    <h1>Editing - {id}</h1>
  );
}

export default EditFeedback;