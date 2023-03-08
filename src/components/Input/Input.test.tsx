import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input", () => {
  it("should update input value on change", () => {
    const onChangeTextMock = jest.fn();
    const newInputText = "test content";

    render(<Input onChange={onChangeTextMock} label="" />);

    const el = screen.getByTestId("input-cmp");

    fireEvent.change(el, { target: { value: newInputText } });
    expect(onChangeTextMock).toHaveBeenCalledWith(newInputText);
  });
});
