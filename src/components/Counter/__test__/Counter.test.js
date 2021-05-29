import { fireEvent, render } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter component", () => {
  let getByTestId;

  beforeEach(() => {
    const counterComponent = render(<Counter />);
    getByTestId = counterComponent.getByTestId;
  });

  test("should render counter value", () => {
    const counter = getByTestId("counter");

    expect(counter).toBeInTheDocument();
  });

  test("should have a initial value of 0", () => {
    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
  });

  test("should have a label of + in increment counter button", () => {
    const btn = getByTestId("increment");
    expect(btn.textContent).toBe("+");
  });

  test("should have a label of - in decrement counter button", () => {
    const btn = getByTestId("decrement");
    expect(btn.textContent).toBe("-");
  });

  test("should have an input text with an initial value of 1", () => {
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");
  });

  test("should be able to change the value of an input field", () => {
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
    expect(counterEl.className).toBe("counter-val normal");

    fireEvent.click(increment);
    expect(counterEl.className).toBe("counter-val over-hundred");

    fireEvent.click(decrement);
    fireEvent.click(decrement);
    expect(counterEl.className).toBe("counter-val normal");

    fireEvent.click(decrement);
    fireEvent.click(decrement);
    expect(counterEl.className).toBe("counter-val under-hundred");
  });
});
