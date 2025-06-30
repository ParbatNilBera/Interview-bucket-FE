import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showpassword, setShowpassword] = useState(false);
  const toggleShowPassword = () => {
    setShowpassword(!showpassword);
  };
  return (
    <div className="">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showpassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <div>
            {showpassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-500 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
