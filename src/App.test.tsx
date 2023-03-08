import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Contacts Page", () => {
  it("should render the contacts page without crashing", () => {
    render(<App />);
    
    const el = screen.getByText("Contacts");
    expect(el).toBeInTheDocument();
  });
});
