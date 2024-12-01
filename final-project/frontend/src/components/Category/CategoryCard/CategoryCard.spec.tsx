import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryCard } from "./CategoryCard";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
  generatePath: jest.fn(),
}));

describe("CategoryCard Component", () => {
  const MockIcon = () => <div data-testid="mock-icon" />;

  const mockCategory = {
    name: "Cleaning",
    color: "#ff0000",
    icon: MockIcon,
  };

  const mockParams = { category: "Cleaning" };

  beforeEach(() => {
    jest.resetAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    (generatePath as jest.Mock).mockImplementation((path, params) => `${path}/${params.category}`);
  });

  it("renders the category name", () => {
    render(<CategoryCard category={mockCategory} />);

    expect(screen.getByText(mockCategory.name)).toBeInTheDocument();
  });

  it("renders the correct icon", () => {
    render(<CategoryCard category={mockCategory} />);

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("applies active styles when the category matches the URL parameter", () => {
    (jest.requireMock("react-router-dom").useParams as jest.Mock).mockReturnValue(mockParams);

    const { container } = render(<CategoryCard category={mockCategory} />);
    expect(container.firstChild).toHaveClass("active");
  });

  it("does not apply active styles when the category does not match the URL parameter", () => {
    (jest.requireMock("react-router-dom").useParams as jest.Mock).mockReturnValue({
      category: "Other",
    });

    const { container } = render(<CategoryCard category={mockCategory} />);
    expect(container.firstChild).not.toHaveClass("active");
  });

  it("applies vertical styles when isVertical is true", () => {
    const { container } = render(<CategoryCard category={mockCategory} isVertical />);

    expect(container.firstChild).toHaveClass("vertical");
  });

  it("navigates to the correct path when clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<CategoryCard category={mockCategory} />);

    fireEvent.click(screen.getByText(mockCategory.name));
    expect(mockNavigate).toHaveBeenCalledWith(`${ROUTES.SEARCH_CATEGORY}/${mockCategory.name}`);
  });
});
