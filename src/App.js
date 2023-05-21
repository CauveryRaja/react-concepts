import Dashboard from "./context/Dashboard";
// import Home from "./error-boundaries/Home";
import Menu from "./forwarding-refs/Menu";
import Navbar from "./higher-order-components/Navbar";
import Modal from './portals/Modal';
// import List from './lists_keys/List';
import ProfilerWrapper from "./profiler/ProfilerWrapper";
import Mouse from './render-props/Mouse';
import Cat from './render-props/Cat';
import Dog from './render-props/Dog';
// import Form from './form/Form';
// import Message from "./hooks/reducer/Message";
import Home2 from "./rerender/Oct30/Home";
import FormComponent from "./form/Oct11_2021/Form";
// import Sample from "./stale_values/Sample";
import Home3 from "./rerender/Nov29/Home";
import Home from "./side-effects/Home";
// import Home from "./create-element/Home";
// import Home from "./rerender/Jan05/Home";
// import Memo from './memoize/Jan06/Memo';
// import Home from './context/Jan11_2022/ContextDemo';
// import Home from './rerender/Jan31_2022/Home';
// import Form from "./form/Feb07_2022/Form";
import List from "./lists_keys/Feb10_2022/List";
import Comp from './context/Apr20_2022/ContextUpdate';

import Message from "./hooks/custom hooks/Sample";
import Sample from "./hooks/custom hooks/Message";

function App() {
  return (
    <div className="App">
      {/* Usage of Context API */}

      {/* <Home3 /> */}

      {/* <Home2 /> */}

      {/* <FormComponent /> */}

      {/* <Sample /> */}

      {/* Hooks */}
      {/* <Message greeting="Hello" name="ram"></Message> */}

      {/* <button>Change name</button> */}

      {/* <Home /> */}

      {/* <Home /> */}

      {/* <Comp /> */}

      {/* <Form /> */}

      {/* <List /> */}

      <Message />
      <Sample />
    </div>
  );
}

export default App;
