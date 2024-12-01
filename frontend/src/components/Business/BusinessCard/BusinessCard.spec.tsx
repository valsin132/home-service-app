import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { BusinessCard } from "./BusinessCard";
import { Business } from "@/types/business";

describe("BusinessCard Component", () => {
  const business: Business = {
    _id: "1",
    name: "Test Business",
    about: "This is a test business providing excellent services.",
    category: "Test Category",
    contactPerson: "John Doe",
    address: "123 Test Street",
    email: "test@example.com",
    images: [{ url: "https://example.com/image1.jpg" }, { url: "https://example.com/image2.jpg" }],
  };

  it("displays the first image of the business", () => {
    render(
      <Router>
        <BusinessCard business={business} />
      </Router>,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image1.jpg");
  });

  it("does not break if images array is empty", () => {
    const businessWithoutImages = { ...business, images: [] };

    render(
      <Router>
        <BusinessCard business={businessWithoutImages} />
      </Router>,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
