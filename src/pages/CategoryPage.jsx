import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categorySlug } = useParams();

  return (
    <section>
     <div className="page-container">
      <h1>카테고리 상세</h1>
      <p>현재 카테고리: {categorySlug}</p>
     </div>
    </section>
  );
}

export default CategoryPage;