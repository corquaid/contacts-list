import { render, screen } from "@testing-library/react";
import { ContactsList } from ".";

describe("Contacts List", () => {
  it("should render error message if error prop contains one", () => {
    const error = "message";
    render(<ContactsList loading={false} error={error} contacts={[]} onClick={jest.fn} selected={[]} />);

    const el = screen.getByTestId("error-div")
    expect(el).toBeInTheDocument()
  });
});

