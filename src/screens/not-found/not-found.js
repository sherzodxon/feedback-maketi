import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <>
    <Link to="/" children="Go Back"/>
    <h1>Not found</h1>
    </>
  );
}

export default NotFound;