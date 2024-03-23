import { GlobalStyle } from "./styles/global";
import { ContactsProvider } from "./shared/context/ContactsContext";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalContact } from "./components/ModalContact";

function App() {
  return (
    <ContactsProvider>
      <Header />
      <GlobalStyle />
      <Dashboard />
      <ModalContact />
    </ContactsProvider>
  );
}

export default App;
