import { render } from "@testing-library/react";

import BasicTable from "./index";
import { IBasicTableProps } from "./types";

const wrapper = (props: IBasicTableProps) => render(<BasicTable {...props} />);

describe("<BasicTable />", () => {

  describe("should render with different props correctly", () => {
    const data = { id: "1", firstName: "first name", lastName: "last name", email: "email@address.com", phoneNumber: "+123123123" };

    const testcases: Array<[Partial<IBasicTableProps>]> = [
      [{}],
      [{ clients: [data] }],
      [{ searchedClients: [data] }],
      [{ isSearched: false }],
    ];

    test.each(testcases)("with prop `%o`", (data) => {
      expect(() => wrapper(data)).not.toThrow();
    });
  });
});
