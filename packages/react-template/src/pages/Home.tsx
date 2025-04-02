import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>홈 페이지</h1>
      <p>환영합니다! React Router v7과 함께하는 앱입니다.</p>
      <div className="links">
        <Link to="/about">소개 페이지로 이동</Link>
      </div>
    </div>
  );
}
