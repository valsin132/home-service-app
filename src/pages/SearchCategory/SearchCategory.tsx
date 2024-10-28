import { VerticalCategoryList } from "../../components/Category/VerticalCategoryList/VerticalCategoryList";
import { useParams } from "react-router-dom";

export function SearchCategory() {
  const { category } = useParams();

  return (
    <div>
      <VerticalCategoryList />
    </div>
  );
};

