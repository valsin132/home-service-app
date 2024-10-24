import { useParams } from "react-router-dom"

export function SearchCategory() {
  const { category } = useParams();

  return (
    <div>
      It's {category}
    </div>
  );
};

