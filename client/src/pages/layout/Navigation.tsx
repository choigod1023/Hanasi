import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";

export const Navigation = () => {
  return (
    <nav className="shadow-lg bg-white/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <span className="text-xl font-bold text-romantic-600">
                Hanasi
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <NavLink to="/">
              {({ isActive }) => (
                <Button
                  variant="nav"
                  isActive={isActive}
                  icon={<HomeIcon className="w-5 h-5" />}
                >
                  홈
                </Button>
              )}
            </NavLink>

            <NavLink to="/favorites">
              {({ isActive }) => (
                <Button
                  variant="nav"
                  isActive={isActive}
                  icon={<HeartIcon className="w-5 h-5" />}
                >
                  즐겨찾기
                </Button>
              )}
            </NavLink>

            <NavLink to="/settings">
              {({ isActive }) => (
                <Button
                  variant="nav"
                  isActive={isActive}
                  icon={<Cog6ToothIcon className="w-5 h-5" />}
                >
                  설정
                </Button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
