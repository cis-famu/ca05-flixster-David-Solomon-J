import Movielist from "./components/Movielist";
import './App.css';

function App() {
  return (
      <>

          <div className="container" >
              <body>
              <div className="row">
                  <div className="col-12">
                      <h3 className="display-4 page-title text-center m-3">Today's Films</h3>
                      <br/>
                  </div>
              </div>
              </body>
          </div>

          <Movielist />
      </>
  );
}

export default App;
