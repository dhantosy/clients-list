import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { IClientList } from "./types";

const initialState: IClientList = {
  clients: [],
  isClientSearched: false,
  searchedClients: [],
};

export const StateContext = createContext<{
  state: IClientList;
  dispatch: Dispatch<Action>;
}>(
  {
    state: {
      clients: [],
      isClientSearched: false,
      searchedClients: []
    },
    dispatch: function (): void {
      throw new Error("Function not implemented.");
    }
  }
);

export const ACTIONS = {
  FETCH_ALL_CLIENTS: "FETCH_ALL_CLIENTS",
  CREATE_NEW_CLIENT: "CREATE_NEW_CLIENT",
  SEARCH_CLIENTS: "SEARCH_CLIENTS",
};

type Action = {
  type: keyof typeof ACTIONS;
  data: any;
};

const reducer = (state: IClientList, action: Action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL_CLIENTS:
      return { 
        ...state,
        isClientSearched: false,
        searchedClients: [],
        clients: action.data,
      };
    case ACTIONS.CREATE_NEW_CLIENT:
      return { 
        ...state,
        isClientSearched: false,
        searchedClients: [],
        clients: [...state.clients, action.data],
      };
    case ACTIONS.SEARCH_CLIENTS:
      return {
        ...state,
        isClientSearched: true,
        searchedClients: action.data,
      };
    default:
      return state;
  }
};

export default function ClientsProvider({
  children,
}: {
  children?: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
