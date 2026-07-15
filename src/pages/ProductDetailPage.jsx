import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productSlug } = useParams();

  return (
    <section>
      <div className="page-container">
        <h1>제품 상세</h1>
        <p>현재 제품: {productSlug}</p>
      </div>
    </section>
  );
}

export default ProductDetailPage;