const Header = ({ children,user }) => (
  <div className="text-center mb-10">
    <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      {children}
    </h1>
    <p className="text-sm text-gray-600 mt-2 tracking-wide italic">
      desarrollada por <span className="font-semibold text-gray-800">{user} </span>
    </p>
  </div>
);

export default Header;
