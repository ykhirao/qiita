import { Button } from "./Button";

const App = () => (
  <div>
    <Button onClick={() => alert(1)}>Click 1</Button>
  </div>
);

const rootElement = document.getElementById("root");
rootElement.appendChild(<App />);

export default App;
