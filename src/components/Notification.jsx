import React from "react";
import BottomNavigation from "./BottomNavigation";
import Avatar from "../../public/assets/PNG/avatar.png";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

const NotificationComponent = () => {
  const navigate = useNavigate();
  const notifications = [
    {
      id: 1,
      name: "Kristine Jones",
      avatar: Avatar,
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "Kay Hicks",
      avatar: Avatar,
      message:
        "There are many variations of passages of Lorem Ipsum available.",
      time: "2 hours ago",
    },
    {
      id: 3,
      name: "Cheryl Moretti",
      avatar: Avatar,
      message:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
      time: "6 hours ago",
    },
    {
      id: 4,
      name: "Cheryl Moretti",
      avatar: Avatar,
      message:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
      time: "1 day ago",
    },
    {
      id: 5,
      name: "Kristine Jones",
      avatar: Avatar,
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      time: "2 hours ago",
    },
    {
      id: 6,
      name: "Kay Hicks",
      avatar: Avatar,
      message:
        "There are many variations of passages of Lorem Ipsum available.",
      time: "2 hours ago",
    },
    {
      id: 7,
      name: "Cheryl Moretti",
      avatar: Avatar,
      message:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
      time: "6 hours ago",
    },
    {
      id: 8,
      name: "Cheryl Moretti",
      avatar: Avatar,
      message:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
      time: "6 hours ago",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 m-4">
        <div className="flex items-center">
          <button onClick={() => navigate("/home")} className="p-1 bg-black rounded-full m-2 text-white">
            <IoArrowBackCircleSharp size={36}/>
          </button>
        </div>
        <Card className="rounded-full">
          <button className="p-1 rounded-full h-6 w-6 flex items-center">
            <HiOutlineDotsVertical  size={32}/>
          </button>
        </Card>
      </div>
      <h1 className="text-xl font-bold ml-7">Notification</h1>

      {/* Notifications List */}
      <div className="h-full overflow-y-auto p-3 max-w-full">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="px-4 py-3 border-b border-gray-300 last:border-b-0"
          >
            <div className="flex">
              <img
                src={notification.avatar}
                alt={notification.name}
                className="w-20 h-20 rounded-full mr-3 bg-gray-300"
              />
              <div className="flex-1">
                <div className="flex items-baseline">
                  <span className="ml-1 text-sm text-gray-600">
                    <span className="font-extrabold">{notification.name}</span>{" "}
                    {notification.message}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation - Visible only on mobile */}
      <div className="block md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default NotificationComponent;
