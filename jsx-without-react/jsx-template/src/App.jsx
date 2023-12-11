import { Button } from "./Button";
import { todos } from "./data";

const App = () => {
  // 代入だと動かない。fetchしたものを代入するにはdocumentAPI使うしかない？
  // let todo = [];
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  //     todo = json;
  //   })
  return (
    <div>
      <Button onClick={() => alert(1)}>Click 1</Button>
      {todos.length > 0 && <table>
        {todos.map((item) => {
          return <tr><td>{item.id}</td><td>{item.title}</td></tr>;
        })}
      </table>}
    </div>
  )
}

const rootElement = document.getElementById("root");
rootElement.appendChild(<App />);

export default App;
