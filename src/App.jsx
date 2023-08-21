import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <body className="container d-flex justify-content-center align-items-center">
        <Card>
          <Nav />
          <div className="col-md-6 py-4">
            <Login />
          </div>

          <div className="d-none col-md-6 d-md-flex align-items-center">
            <img className="img-fluid" src="work.jpg" alt="" />
          </div>
        </Card>
      </body>
    </>
  );
};

export default App;
