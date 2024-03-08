import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import BasicTableRow from "./BasicTableRow";
import { IBasicTableProps } from "./types";

const CustomTableContainer = styled(TableContainer)({
  boxShadow: "0 0 10px -5px rgba(0, 0, 0, 0.1)",
});

const CustomTable = styled(Table)({
  "& .MuiTableBody-root tr:last-child > *": {
    border: "none",
  },
  "& .MuiTableBody-root th": {
    color: "#3360FF",
    fontWeight: "600",
    padding: "20px"
  },
});

export default function BasicTable({ clients, isSearched, searchedClients }: IBasicTableProps) {
  const currentClients = isSearched ? searchedClients : clients;

  return (
    <CustomTableContainer>
      <CustomTable aria-label="basic table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentClients?.map((client) => (
            <BasicTableRow key={client.id} client={client} />
          ))}
          {!currentClients ||
            (!currentClients.length && (
              <TableRow sx={{ padding: 3 }}>
                <TableCell component="th" scope="row">
                  No Clients
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </CustomTable>
    </CustomTableContainer>
  );
}
