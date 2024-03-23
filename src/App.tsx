import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";
import { ContactsProvider } from "./shared/context/ContactsContext";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalContact } from "./components/ModalContact";

function App() {
  return (
    <ContactsProvider>
      <ToastContainer />
      <Header />
      <GlobalStyle />
      <Dashboard />
      <ModalContact />
    </ContactsProvider>
  );
}

export default App;
