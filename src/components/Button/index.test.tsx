import { render } from "@testing-library/react";

import Button from "./index";
import { IButtonProp } from "./types";

const wrapper = (props?: IButtonProp) => render(<Button {...props} />);

describe("<Button />", () => {
  
  it("should render correctly", () => {
    const { container } = wrapper({ children: "Content" });
    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild?.nodeName).toEqual("BUTTON");
    expect(container?.textContent).toEqual("Content");
  });

  describe("should render with different props correctly", () => {
    const testcases: Array<[Partial<IButtonProp>]> = [
      [{}],
      [{ disabled: true }],
      [{ backgroundColor: "#FFFFFFF" }],
      [{ type: "button" }],
      [{ children: "<div />" }],
      [{ onClick: () => {} }],
    ];

    test.each(testcases)("with prop `%o`", (props) => {
      expect(() => wrapper(props)).not.toThrow();
    });
  });
});
