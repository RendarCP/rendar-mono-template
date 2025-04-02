import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <div className="links">
        <Link to="/">홈 페이지로 이동</Link>
      </div>
    </div>
  );
}
