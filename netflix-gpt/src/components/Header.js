import { NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 px-6 py-3 bg-slate-900 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src={NETFLIX_LOGO} alt="logo" className="w-24" />
        {user && (
          <div className="flex items-center gap-6">
            <img
              src={user.photoURL}
              alt="user_icon"
              className="w-9 h-9 rounded-full border-2 border-gray-600 object-cover transition-all duration-300 hover:border-gray-400 hover:shadow-md"
            />
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
