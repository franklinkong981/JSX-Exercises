const Tweet = ({username, name, date, message}) => {
  return (
    <div>
      <h2>Tweet by {name} <em>@{username}</em></h2>
      <p>{message}</p>
      <small>Tweeted on{date}</small>
    </div>
  );
};