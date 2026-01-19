import "./header.css";
export const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./img/brand_logo.png" alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>Menu</li>
          <li>location</li>
          <li>About</li>
          <li>contact</li>
        </ul>
      </div>
      <button>Login</button>
    </nav>
  );
};
