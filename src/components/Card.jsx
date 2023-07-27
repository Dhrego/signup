const Card = (props) => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      {props.children}
    </div>
  );
};
export default Card;
