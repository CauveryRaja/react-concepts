import Dashboard from "./context/Dashboard";
import Home from "./error-boundaries/Home";

function App() {
  return (
    <div className="App">
      {/* Usage of Context API */}
      <Dashboard></Dashboard>
      {/* Usage of Error boundaries */}
      <Home></Home>
    </div>
  );
}

export default App;
