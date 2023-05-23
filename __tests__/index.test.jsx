import { render, screen } from "@testing-library/react";
import Home from '../src/components/screens/home/Home'
import '@testing-library/jest-dom'

describe("ExampleComponent", () => {
  it("renders the heading", () => {
    render(<Home />);
    const headingElement = screen.getByText(/Фильмы/i);
    expect(headingElement).toBeInTheDocument();
  });
});
