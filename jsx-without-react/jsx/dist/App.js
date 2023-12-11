import { Button } from "./Button";
import { jsx as _jsx } from "./core/jsx-runtime";
const App = () => _jsx("div", {
  children: _jsx(Button, {
    onClick: () => alert(1),
    children: "Click 1"
  })
});
const rootElement = document.getElementById("root");
rootElement.appendChild(_jsx(App, {}));
export default App;