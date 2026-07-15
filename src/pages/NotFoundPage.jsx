import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section>
     <div className="page-container">
        <h1>페이지를 찾을 수 없습니다.</h1>
        <Link to="/">홈으로 이동</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;