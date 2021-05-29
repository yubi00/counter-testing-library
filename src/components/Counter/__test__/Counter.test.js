import { fireEvent, render } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter component", () => {
  test("should render counter value", () => {
    const { getByTestId } = render(<Counter />);
    const counter = getByTestId("counter");

    expect(counter).toBeInTheDocument();
  });

  test("should have a initial value of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
  });

  test("should have a label of + in increment counter button", () => {
    const { getByTestId } = render(<Counter />);
    const btn = getByTestId("increment");
    expect(btn.textContent).toBe("+");
  });

  test("should have a label of - in decrement counter button", () => {
    const { getByTestId } = render(<Counter />);
    const btn = getByTestId("decrement");
    expect(btn.textContent).toBe("-");
  });

  test("should have an input text with an initial value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");
  });

  test("should be able to change the value of an input field", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    });

    expect(inputEl.value).toBe("5");
  });

  test("should increment the counter value acc to input value", () => {
    const { getByTestId } = render(<Counter />);

    const increment = getByTestId("increment");
    const counterVal = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    });

    fireEvent.click(increment);

    expect(counterVal.textContent).toBe("5");
  });

  test("should decrement the counter value acc to input val", () => {
    const { getByTestId } = render(<Counter />);

    const decrement = getByTestId("decrement");
    const counterVal = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    });
    fireEvent.click(decrement);

    expect(counterVal.textContent).toBe("-5");
  });
  test("should display correct counter result after incrementing and decrementing counter value", () => {
    const { getByTestId } = render(<Counter />);

    const decrement = getByTestId("decrement");
    const increment = getByTestId("increment");
    const counterVal = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "10"
      }
    });

    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(decrement);
    fireEvent.click(decrement);

    expect(counterVal.textContent).toBe("20");

    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    });

    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(decrement);

    expect(counterVal.textContent).toBe("25");
  });

  test("should have correct styles for counter value , over 100 and below", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    const increment = getByTestId("increment");
    const decrement = getByTestId("decrement");
    const inputEl = getByTestId("input");

    expect(counterEl.className).toBe("counter-val normal");

    fireEvent.change(inputEl, {
      target: {
        value: "100"
      }
    });

    fireEvent.click(increment);
    fireEvent.click(increment);

    expect(counterEl.className).toBe("counter-val over-hundred");

    fireEvent.click(decrement);
    fireEvent.click(decrement);
    fireEvent.click(decrement);
    fireEvent.click(decrement);

    expect(counterEl.className).toBe("counter-val under-hundred");
  });
});
