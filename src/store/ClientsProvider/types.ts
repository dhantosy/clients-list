export interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IClientList {
  clients: IClient[];
  searchedClients: IClient[];
  isClientSearched: boolean;
}
