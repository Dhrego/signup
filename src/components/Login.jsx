const Login = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className="display-1 fw-bolder m-0">Hi there!</h1>
        <p>Welcome to Dibbs. Community Dashboard</p>
      </div>
      <div className="col-8 mx-auto btn btn-outline-dark p-3 border-secondary-subtle d-flex justify-content-center align-items-center">
        <img
          height={20}
          width={20}
          className="me-2"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />
        <span>Log in to Google</span>
      </div>

      <div className="text-center d-flex p-4 justify-content-center align-items-center">
        <div className=""></div>
        <div className="col-2">
          <hr />
        </div>
        <div className="col-1">or</div>
        <div className="col-2">
          <hr />
        </div>
      </div>
      <div className="col ">
        <div class="form-floating mb-3 col-8 mx-auto">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Your email"
          />
          <label for="floatingInput">Your email</label>
        </div>
        <div className="form-floating col-8 mx-auto">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label className="" for="floatingPassword">
            Password
          </label>
          <div className="d-flex justify-content-end my-3">
            <a className="text-decoration-none" href="#">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="d-grid col-8 mx-auto">
        <button className="btn btn-dark rounded-5" type="button">
          Log in
        </button>
      </div>
      <div className="text-center my-3">
        <span>Don't have an account? </span>
        <a className="text-decoration-none" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};
export default Login;
