import Dashboard from "./context/Dashboard";
import Home from "./error-boundaries/Home";
import Menu from "./forwarding-refs/Menu";
import Navbar from "./higher-order-components/Navbar";
import Modal from './portals/Modal';

function App() {
  return (
    <div className="App">
      {/* Usage of Context API */}
      <Dashboard></Dashboard>

      {/* Usage of Error boundaries */}
      {/* <Home></Home> */}

      {/* Usage of Forward Refs */}
      <Menu></Menu>

      {/* Usage of Higher Order Components */}
      <Navbar></Navbar>

      {/* Usage of Portals */}
      <Modal></Modal>
    </div>
  );
}

export default App;
