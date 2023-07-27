const Nav = () => {
  return (
    <nav className="d-flex align-items-center">
      <p className="text-uppercase display-6 fw-semibold">dibbs</p>
      <div className="ms-auto">
        <select
          className="form-select border rounded-5"
          aria-label="Default select example"
        >
          <option value="1">🇬🇧 EN</option>
          <option value="2">🇫🇷 FR</option>
          <option value="3">🇪🇸 ES</option>
          <option value="4">🇯🇵 JP</option>
          <option value="5">🇳🇱 NL</option>
        </select>
      </div>
    </nav>
  );
};
export default Nav;
