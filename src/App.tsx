import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="search-form">
        <div className="row">
          <label className="col-1 col-form-label"></label>
          <div className="col-4">
            <input type="text" id="search" className="search form-control" />
          </div>
          <button type="submit" className="btn btn-info btn-sm col-1">
            Go
          </button>
        </div>
      </form>
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
