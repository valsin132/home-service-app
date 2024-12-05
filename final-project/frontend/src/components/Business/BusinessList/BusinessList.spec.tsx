import { render, screen } from "@testing-library/react";
import { BusinessList } from "./BusinessList";
import { useBusinesses } from "../hooks";

jest.mock("../BusinessCard/BusinessCard", () => ({
  BusinessCard: ({ business }: { business: { name: string } }) => (
    <div data-testid="business-card">{business.name}</div>
  ),
}));

jest.mock("../hooks", () => ({
  useBusinesses: jest.fn(),
}));

describe("BusinessList Component", () => {
  const mockBusinesses = [
    { _id: "1", name: "Business 1", category: "Category A" },
    { _id: "2", name: "Business 2", category: "Category B" },
    { _id: "3", name: "Business 3", category: "Category A" },
  ];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders all businesses when no category is provided", () => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: mockBusinesses });

    render(<BusinessList />);

    const businessCards = screen.getAllByTestId("business-card");
    expect(businessCards).toHaveLength(mockBusinesses.length);

    mockBusinesses.forEach((business) =>
      expect(screen.getByText(business.name)).toBeInTheDocument(),
    );
  });

  it("renders businesses filtered by the provided category", () => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: mockBusinesses });

    render(<BusinessList category="Category A" />);

    const filteredBusinesses = mockBusinesses.filter(
      (business) => business.category === "Category A",
    );

    const businessCards = screen.getAllByTestId("business-card");
    expect(businessCards).toHaveLength(filteredBusinesses.length);

    filteredBusinesses.forEach((business) =>
      expect(screen.getByText(business.name)).toBeInTheDocument(),
    );
  });

  it("renders no businesses if category does not match any", () => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: mockBusinesses });

    render(<BusinessList category="Nonexistent Category" />);

    expect(screen.queryAllByTestId("business-card")).toHaveLength(0);
  });

  it("renders no businesses if data is undefined", () => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: undefined });

    render(<BusinessList />);

    expect(screen.queryAllByTestId("business-card")).toHaveLength(0);
  });
});
