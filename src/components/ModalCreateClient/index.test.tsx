import { render } from "@testing-library/react";

import ModalCreateClient from "./index";
import { IModalProp } from "./types";

const wrapper = (modalProps: IModalProp) => render(<ModalCreateClient {...modalProps} />);

describe("<ModalCreateClient />", () => {

  describe("should render with different props correctly", () => {
    const testcases: Array<[IModalProp]> = [
      [{ onOpen: false, onClose: () => {} }],
      [{ onOpen: true, onClose: () => {} }],
    ];

    test.each(testcases)("with prop `%o`", (props) => {
      expect(() => wrapper(props)).not.toThrow();
    });
  });
});
