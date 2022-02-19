import Movielist from "./components/Movielist";
import './App.css';

function App() {
  return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h3 className="display-4 page-title text-center m-3">Now Playing Movies</h3>
                      <hr/>
                  </div>
              </div>
          </div>

          <Movielist />
      </>
  );
}

export default App;
