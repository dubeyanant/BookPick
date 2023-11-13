import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-medium text-2xl">BookPick</h1>

      <ul className="flex font-medium">
        <li className="px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                isActive
                  ? "text-blue-500 border-blue-500"
                  : "text-gray-700 border-gray-300 hover:border-gray-700",
              ] + " p-2 transition-colors border-b-2"
            }
          >
            Top Books
          </NavLink>
        </li>
        <li className="px-2">
          <NavLink
            to="/recommendations"
            className={({ isActive }) =>
              [
                isActive
                  ? "text-blue-500 border-blue-500"
                  : "text-gray-700 border-gray-300 hover:border-gray-700",
              ] + " p-2 transition-colors border-b-2"
            }
          >
            Recommendations
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
