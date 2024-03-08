import { IClient } from "../../store/ClientsProvider/types";

export interface IClientProps {
  client: IClient;
}

export interface IBasicTableProps {
  clients?: IClient[];
  isSearched?: boolean;
  searchedClients?: IClient[];
}
