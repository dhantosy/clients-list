import { render } from "@testing-library/react";

import Page from "./index";
import { IPageProp } from "./types";

const wrapper = (modalProps: IPageProp) => render(<Page {...modalProps} />);

describe("<Page />", () => {

  describe("should render with different props correctly", () => {
    const testcases: Array<[IPageProp]> = [
      [{ children: "<div />" }],
    ];

    test.each(testcases)("with prop `%o`", (props) => {
      expect(() => wrapper(props)).not.toThrow();
    });
  });
});
