const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-medium text-2xl">BookPick</h1>

      <div className="border-b-2">
        <ul className="flex font-medium">
          <li className="text-blue-500  border-indigo-500 px-2">
            <a href="#">Top Books</a>
          </li>
          <li className="px-2">
            <a href="#">Recommendations</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
