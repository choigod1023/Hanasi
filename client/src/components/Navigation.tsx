import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const Navigation = () => {
  return (
    <nav className="bg-white/50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-romantic-600">
                TalkSpark
              </span>
            </div>
          </div>

          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-romantic-600"
                    : "text-romantic-400 hover:text-romantic-500"
                }`
              }
            >
              <HomeIcon className="mr-2 h-5 w-5" />홈
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-romantic-600"
                    : "text-romantic-400 hover:text-romantic-500"
                }`
              }
            >
              <HeartIcon className="mr-2 h-5 w-5" />
              즐겨찾기
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-romantic-600"
                    : "text-romantic-400 hover:text-romantic-500"
                }`
              }
            >
              <Cog6ToothIcon className="mr-2 h-5 w-5" />
              설정
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
