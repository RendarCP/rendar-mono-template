import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page">
      <h1>소개 페이지</h1>
      <p>이 페이지는 사이트에 대한 소개 페이지입니다.</p>
      <div className="links">
        <Link to="/">홈 페이지로 이동</Link>
      </div>
    </div>
  );
}
