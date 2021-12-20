import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";
function ListProfile() {
  const users = useSelector((state) => state.userReducer.users);
  return (
    <div>
      {users.map((user) => (
        <Profile user={user} key={user._id} />
      ))}
    </div>
  );
}

export default ListProfile;
