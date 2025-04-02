import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>React 템플릿</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">홈</NavLink>
          </li>
          <li>
            <NavLink to="/about">소개</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
