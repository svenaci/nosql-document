const Card = ({ burger }) => {
  return (
    <div className="card">
      <h2>{burger.name}</h2>
      <h2>{burger.description}</h2>
      <h2>{burger.location.address}</h2>
      <h2>{burger.location.web}</h2>
      {burger.visited && <div className="visited"></div>}
      {!burger.visited && <div className="not-visited"></div>}
    </div>
  );
};

export default Card;
