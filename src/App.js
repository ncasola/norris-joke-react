import "bootstrap/dist/css/bootstrap.min.css"
import Jokes from "./Jokes";

function App() {
  return (
    <div className="container bg-pattern">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <span className="fs-4 ms-3">Chuck Norris API</span>
        </a>
  
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        </ul>
      </header>
      <Jokes />
    </div>
  );
}

export default App;
