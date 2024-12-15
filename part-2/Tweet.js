const Tweet = ({username, name, date, message}) => {
  return (
    <div className="px-2 border border-primary rounded">
      <h2 className="display-4 text-center">Tweet by {name} <span className="badge badge-secondary">@{username}</span></h2>
      <h4 className="text-success text-center font-weight-bold">{message}</h4>
      <p className="fs-6 text-center">Tweeted on {date}</p>
    </div>
  );
};