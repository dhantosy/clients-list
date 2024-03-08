import { Routes, Route } from "react-router-dom";
import ClientsProvider from "./store/ClientsProvider";
import Clients from "./pages/Clients";

export default function App() {
  return (
    <ClientsProvider>
      <Routes>
        <Route path="/" element={<Clients />} />
      </Routes>
    </ClientsProvider>
  );
}
