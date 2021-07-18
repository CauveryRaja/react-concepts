import Dashboard from "./context/Dashboard";
import Home from "./error-boundaries/Home";
import Menu from "./forwarding-refs/Menu";
import Navbar from "./higher-order-components/Navbar";
import Modal from './portals/Modal';
import List from './lists_keys/List';
import ProfilerWrapper from "./profiler/ProfilerWrapper";

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

      {/* Practising List & Keys */}
      {/* <List></List> */}

      {/* Usage of Profiler API */}
      <ProfilerWrapper></ProfilerWrapper>
    </div>
  );
}

export default App;
