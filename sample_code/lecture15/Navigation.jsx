import { useNavigate, useLocation } from 'react-router-dom';
import Demo from './RouteMatching';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <>
      <button onClick={() => navigate('users')}>go to users</button>
      <Demo />
    </>
  );
}
