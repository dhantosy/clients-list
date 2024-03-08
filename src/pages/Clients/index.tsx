import { ChangeEvent, memo, useContext, useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { StateContext } from "../../store/ClientsProvider";
import Page from "../../components/Page";
import BasicTable from "../../components/BasicTable";
import InputSearch from "../../components/InputSearch";
import Button from "../../components/Button";
import { getClients } from "../../services/api";
import styles from "./clients.module.css";

import ModalCreateClient from "../../components/ModalCreateClient";

function Clients() {
  const { state, dispatch } = useContext(StateContext);
  const [open, setOpen] = useState(false);
  const { clients, searchedClients, isClientSearched } = state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getClients().then((clients) =>
      dispatch({ type: "FETCH_ALL_CLIENTS", data: clients })
    );
  }, [dispatch]);

  const handleInputSearchChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const filteredItems = clients.filter((user) =>
      user.firstName.toLowerCase().includes(target.value.toLowerCase()) ||
      user.lastName.toLowerCase().includes(target.value.toLowerCase())
    );

    dispatch({ type: "SEARCH_CLIENTS", data: filteredItems });
  };

  return (
    <Page>
      <Typography
        variant="h4" 
        fontWeight={500}
      >
        Clients
      </Typography>
      <Box className={styles.navigation}>
        <InputSearch placeholder="Search clients..." onChange={(e) => handleInputSearchChange(e)} />
        <Button onClick={handleOpen}>Create new client</Button>
      </Box>
      <Paper className={styles.tableContainer}>
        <BasicTable clients={clients} isSearched={isClientSearched} searchedClients={searchedClients} />
      </Paper>
      <ModalCreateClient
        onOpen={open}
        onClose={handleClose}
      />
    </Page>
  );
}

export default memo(Clients);
