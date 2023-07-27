import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Column from "./components/Column";

const App = () => {
  return (
    <>
      <Card>
        <div className="container-fluid row shadow border p-4 rounded-5">
          <Column>
            <Nav />
            <Login />
          </Column>
          <Column>
            <div className="col p-5">Sign-up</div>
          </Column>
        </div>
      </Card>
    </>
  );
};

export default App;
