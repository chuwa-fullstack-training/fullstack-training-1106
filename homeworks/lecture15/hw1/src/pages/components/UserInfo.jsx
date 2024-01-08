import { Link } from "react-router-dom";

const UserInfo = (props) => {
  const { user, setCard } = props;

  return (
    <div className="userInfo" key={user.id}>
      <div className="infoId">{user.id}</div>
      <Link className="infoText" to={`/user/${user.login}`} state={user}>
        {user.login}
      </Link>
      <img className="infoImg" src={user.avatar_url} />
    </div>
  );
};

export default UserInfo;
