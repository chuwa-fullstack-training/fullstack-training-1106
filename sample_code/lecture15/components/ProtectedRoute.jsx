import { Navigate, Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function ProtectedLayout({ children }) {
  const user = useMemo(() => localStorage.getItem('user'), []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
