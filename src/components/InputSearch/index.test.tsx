import { render } from "@testing-library/react";

import InputSearch from "./index";
import { IInputSearchProp } from "./types";

const wrapper = (props?: IInputSearchProp) => render(<InputSearch {...props} />);

describe("<InputSearch />", () => {

  describe("should render with different props correctly", () => {
    const testcases: Array<[Partial<IInputSearchProp>]> = [
      [{ placeholder: "placeholder" }],
      [{ onChange: () => {} }],
    ];

    test.each(testcases)("with prop `%o`", (props) => {
      expect(() => wrapper(props)).not.toThrow();
    });
  });
});
