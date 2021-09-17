import { render, fireEvent } from "@testing-library/svelte";
import Counter from "../lib/Counter.svelte";

describe("Counter Component", () => {
  test("it counts", async () => {
    const { getByTestId } = render(Counter, {
      id: "counter-btn",
    });

    const button = getByTestId("counter-btn");
    expect(button.innerHTML).toBe("Clicks: 0");
    await fireEvent.click(button);
    expect(button.innerHTML).toBe("Clicks: 1");
  });
});

// test("test", () => {
//   expect(2 + 2).toEqual(4);
// });

// export {};
