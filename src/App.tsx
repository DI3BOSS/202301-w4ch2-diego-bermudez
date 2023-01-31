import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <div className="row">
        <div className="container-gif offset-1 col-6"></div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
}

export default App;
