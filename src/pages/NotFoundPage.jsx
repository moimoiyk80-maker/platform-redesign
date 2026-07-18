import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code">404</p>

        <h1>페이지를 찾을 수 없습니다.</h1>

        <p className="not-found__description">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="not-found__home">
            홈으로 이동
          </Link>

          <Link to="/products" className="not-found__products">
            제품 찾아보기
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;