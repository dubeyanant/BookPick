import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      [
        isActive
          ? "text-blue-500 border-blue-500"
          : "text-gray-700 border-gray-300 hover:border-gray-700",
      ] + " pl-0 pb-1 sm:p-2 transition-colors border-b-2"
    }
  >
    {children}
  </NavLink>
);

const headerContent = {
  title: "BookPick",
  topBooks: "Top Books",
  recommendations: "Recommendations",
};

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-10">
      <h1 className="font-medium text-2xl">{headerContent.title}</h1>

      <ul className="flex font-medium flex-col sm:flex-row gap-3 sm:gap-0 mt-4 sm:mt-0">
        <li>
          <NavigationLink to="/">{headerContent.topBooks}</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/recommendations">
            {headerContent.recommendations}
          </NavigationLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
