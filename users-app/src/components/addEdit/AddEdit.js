import "./AddEdit.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, editUser } from "../../redux/actions/usersActions";
import { useNavigate } from "react-router-dom";
function AddEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: 0,
  });
  const [file, setFile] = useState(null);
  const userEdit = useSelector((state) => state.userReducer.user);
  const edit = useSelector((state) => state.userReducer.edit);

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelAdd = () => {
    let data = new FormData();
    data.append("username", user.username);
    data.append("email", user.email);
    data.append("age", user.age);
    data.append("myPicture", file);

    dispatch(addNewUser(data));
    navigate("/ListUsers");
  };
  const handelEdit = () => {
    let data = new FormData();
    data.append("username", userEdit.username);
    data.append("email", userEdit.email);
    data.append("age", userEdit.age);
    data.append("myPicture", file);

    dispatch(editUser(userEdit._id, data));
    navigate("/ListUsers");
  };
  useEffect(() => {
    edit
      ? setUser({
          username: userEdit.username,
          email: userEdit.email,
          age: userEdit.age,
        })
      : setUser({
          username: "",
          email: "",
          age: 0,
        });
  }, [userEdit, edit]);
  return (
    <>
      {edit ? (
        <div className="wrapper">
          <form className="form">
            <div className="pageTitle title">Add User </div>
            <div className="secondaryTitle title">
              Please fill this form to AddNewUser .
            </div>
            <input
              type="text"
              name="username"
              value={user.username}
              className="name formEntry"
              placeholder="Name"
              onChange={handelChange}
            />
            <input
              type="text"
              name="email"
              value={user.email}
              className="email formEntry"
              placeholder="Email"
              onChange={handelChange}
            />
            <input
              type="number"
              name="age"
              value={user.age || 0}
              className="name formEntry"
              placeholder="Age"
              onChange={handelChange}
            />
            <input
              type="file"
              className="fil"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button className="submit" onClick={() => handelEdit()}>
              edit
            </button>
          </form>
        </div>
      ) : (
        <div className="wrapper">
          <form className="form">
            <div className="pageTitle title">Add User </div>
            <div className="secondaryTitle title">
              Please fill this form to AddNewUser .
            </div>
            <input
              type="text"
              name="username"
              value={user.username}
              className="name formEntry"
              placeholder="Name"
              onChange={handelChange}
            />
            <input
              type="text"
              name="email"
              value={user.email}
              className="email formEntry"
              placeholder="Email"
              onChange={handelChange}
            />
            <input
              type="number"
              name="age"
              value={user.age}
              className="name formEntry"
              placeholder="Age"
              onChange={handelChange}
            />
            <input
              type="file"
              className="fil"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button className="submit" onClick={() => handelAdd()}>
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default AddEdit;
