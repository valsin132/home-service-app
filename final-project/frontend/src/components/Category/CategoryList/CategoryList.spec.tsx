import { render, screen } from "@testing-library/react";
import { CategoryList } from "./CategoryList";
import { useCategories } from "../hooks";

jest.mock("../hooks", () => ({
  useCategories: jest.fn(),
}));

jest.mock("../CategoryCard/CategoryCard", () => ({
  CategoryCard: ({ category }: { category: { name: string } }) => (
    <div data-testid="category-card">{category.name}</div>
  ),
}));

describe("CategoryList Component", () => {
  it("renders a list of categories", () => {
    const mockCategories = [
      { name: "Cleaning", color: "#ff0000", icon: jest.fn() },
      { name: "Plumbing", color: "#00ff00", icon: jest.fn() },
    ];

    (useCategories as jest.Mock).mockReturnValue({ data: mockCategories });

    render(<CategoryList />);

    const categoryCards = screen.getAllByTestId("category-card");
    expect(categoryCards).toHaveLength(mockCategories.length);

    mockCategories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("renders an empty container when there are no categories", () => {
    (useCategories as jest.Mock).mockReturnValue({ data: [] });

    render(<CategoryList />);

    expect(screen.queryByTestId("category-card")).not.toBeInTheDocument();
  });

  it("handles undefined categories gracefully", () => {
    (useCategories as jest.Mock).mockReturnValue({ data: undefined });

    render(<CategoryList />);

    expect(screen.queryByTestId("category-card")).not.toBeInTheDocument();
  });
});
