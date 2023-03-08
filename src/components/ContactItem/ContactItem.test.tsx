import { fireEvent, render, screen } from "@testing-library/react";
import { ContactItem } from ".";

const onClick = jest.fn();

describe("Contact Item", () => {
  it("should render the contact item correctly", () => {
    const text = "Test name";

    render(
      <ContactItem
        onClick={onClick}
        contact={{ avatar: "", id: 1, first_name: text, last_name: "", email: "", gender: "" }}
        selected={[]}
      />,
    );

    const el = screen.getByText(text);
    expect(el).toBeInTheDocument();
  });

  it("should call onClick correctly when item is clicked", () => {
    render(
      <ContactItem
        onClick={onClick}
        contact={{ avatar: "", id: 1, first_name: "", last_name: "", email: "", gender: "" }}
        selected={[]}
      />,
    );

    const el = screen.getByTestId("contact-item")
    fireEvent.click(el)
    expect(onClick).toHaveBeenCalled()
  });
});
