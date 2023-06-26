export default function Profile() {
  const user = localStorage.getItem('user');

  return <div>{user}</div>;
}
