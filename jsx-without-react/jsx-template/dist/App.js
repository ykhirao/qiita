import { Button } from "./Button";
import { todos } from "./data";
import { jsx as _jsx } from "./core/jsx-runtime";
import { jsxs as _jsxs } from "./core/jsx-runtime";
const App = () => {
  // 代入だと動かない。fetchしたものを代入するにはdocumentAPI使うしかない？
  // let todo = [];
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //     todo = json;
  //   })
  return _jsxs("div", {
    children: [_jsx(Button, {
      onClick: () => alert(1),
      children: "Click 1"
    }), todos.length > 0 && _jsx("table", {
      children: todos.map(item => {
        return _jsxs("tr", {
          children: [_jsx("td", {
            children: item.id
          }), _jsx("td", {
            children: item.title
          })]
        });
      })
    })]
  });
};
const rootElement = document.getElementById("root");
rootElement.appendChild(_jsx(App, {}));
export default App;