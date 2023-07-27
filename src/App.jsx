import "./App.css";

const App = () => {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col row shadow border p-5 rounded-5">
          <div className="col-6 p-5 text-center">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Your email"
              />
              <label for="floatingInput">Your email</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label className="" for="floatingPassword">
                Password
              </label>
            </div>
          </div>
          <div className="col p-5">Sign-up</div>
        </div>
      </div>
    </>
  );
};

export default App;
