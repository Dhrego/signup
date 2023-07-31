import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <body className="vh-100 d-flex align-items-center">
        <div className="container">
          <Card>
            <div className="col-md-6 py-4">
              <Nav />
              <Login />
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src="work.jpg" alt="" />
            </div>
          </Card>
        </div>
      </body>
    </>
  );
};

export default App;
