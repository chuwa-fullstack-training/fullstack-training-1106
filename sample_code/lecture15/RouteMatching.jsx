import { Routes, Route, Outlet, useParams } from 'react-router-dom';

export default function Demo() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<User />} />
          <Route path=":userId/edit" element={<User mode="edit" />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <h1>App Root</h1>
      <Outlet />
    </>
  );
}

function Home() {
  return <div>Home</div>;
}

function Users() {
  return (
    <>
      <h2>Users</h2>
      <Outlet />
    </>
  );
}

function User({ mode }) {
  const { userId } = useParams();
  return mode === 'edit' ? (
    <h3>Edit User {userId}</h3>
  ) : (
    <h3>User Info {userId}</h3>
  );
}

function SignUp() {
  return <div>Sign up</div>;
}

function PageLayout() {
  return (
    <div style={{ textAlign: 'center' }}>
      page layout
      <Outlet />
    </div>
  );
}

function Privacy() {
  return <h3>Privacy</h3>;
}

function About() {
  return <h2>About</h2>;
}

function Terms() {
  return <h3>Terms</h3>;
}
