import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { RepositoryProvider } from "./store/RepositoryContext";
import RepositoryItems from "./components/RepositoryItems";
function App() {
  return (
    <div className="App">
      <RepositoryProvider>
        <SearchInput />
        <RepositoryItems />
      </RepositoryProvider>
    </div>
  );
}

export default App;
