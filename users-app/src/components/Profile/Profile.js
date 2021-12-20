import "./profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={
                      user.pictureURL
                        ? `uploads/${user.pictureURL}`
                        : "https://media.istockphoto.com/vectors/avatar-person-user-icon-blue-version-vector-id1216255414?k=20&m=1216255414&s=170667a&w=0&h=I2yRx9b3GZl57PqZb0OumlZOVqMbyRNxmPEZ0NwxksM="
                    }
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>{user.username}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">GOMYCODE</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/ListUsers")}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
