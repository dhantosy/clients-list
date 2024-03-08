import { TableCell, TableRow } from "@mui/material";
import { IClientProps } from "./types";

export default function BasicTableRow({ client }: IClientProps) {
  const { id, firstName, lastName, email, phoneNumber } = client;

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {firstName} {lastName}
      </TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
    </TableRow>
  );
}
