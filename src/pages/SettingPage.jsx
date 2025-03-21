import React, { useState } from "react";
import { Globe, Bell, Moon, HelpCircle, LogOut } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import Avatar from "../../public/assets/PNG/avatar.png";

const SettingsPage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "Fscreation",
    gender: "Male",
    age: "22 Year",
    email: "Fscreation441@gmail.com",
  });

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (gender) => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  return (
    <div className="w-full md:max-w-3xl md:mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24 mb-2">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={Avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-400 text-sm">Upload image</div>
            )}
          </div>
          <label
            htmlFor="imageUpload"
            className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1 cursor-pointer"
          >
            <LuUpload />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <div className="text-center">Upload image</div>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-gray-400 text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-1">Gender</label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button
              onClick={() => handleGenderChange("Male")}
              className={`px-4 py-2 rounded-full w-full md:w-auto ${
                formData.gender === "Male"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => handleGenderChange("Female")}
              className={`px-4 py-2 rounded-full w-full md:w-auto ${
                formData.gender === "Female"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-1">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <div className="bg-gray-100 rounded-lg p-4">
        <div className="space-y-4">
          {[
            {
              icon: <Globe className="text-gray-600 mr-3" size={20} />,
              label: "Language",
              value: "English",
            },
            {
              icon: <Bell className="text-gray-600 mr-3" size={20} />,
              label: "Notification",
              toggle: notifications,
              setToggle: setNotifications,
            },
            {
              icon: <Moon className="text-gray-600 mr-3" size={20} />,
              label: "Dark Mode",
              toggle: darkMode,
              setToggle: setDarkMode,
            },
            {
              icon: <HelpCircle className="text-gray-600 mr-3" size={20} />,
              label: "Help Center",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.toggle !== undefined ? (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.toggle}
                    onChange={() => item.setToggle(!item.toggle)}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-10 h-6 rounded-full peer ${
                      item.toggle ? "bg-black" : "bg-gray-200"
                    } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                  ></div>
                </label>
              ) : (
                <IoIosArrowForward />
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 flex items-center justify-center bg-black text-white py-3 rounded-lg">
        <LogOut className="mr-2" size={20} />
        Log Out
      </button>
    </div>
  );
};

export default SettingsPage;
