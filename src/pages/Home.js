import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const thisPath = location.pathname;
  return (
    <>
      home
    </>
  )
}

export default Home;