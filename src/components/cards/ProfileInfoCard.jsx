import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import user_pic from "../../../public/images/user.png";
import { FaEdit } from "react-icons/fa";
import Modal from "../Modal";
const ProfileInfoCard = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center">
        <img
          src={user.profileImageURL || user_pic}
          alt=""
          className="w-11 h-11 bg-gray-300 rounded-full mr-3 "
        />

        <div>
          <div className="text-[15px] text-black font-bold leading-3">
            {user.name || ""}
          </div>
          <button
            className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
