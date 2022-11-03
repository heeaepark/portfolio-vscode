import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const thisPath = location.pathname;
  return (
    <>
      홈입니다용~~~~~!
      이 홈페이지의 path는!
    </>
  )
}

export default Home;