const Card = (props) => {
  return (
    <div className="container my-5 row shadow rounded-5">{props.children}</div>
  );
};
export default Card;
