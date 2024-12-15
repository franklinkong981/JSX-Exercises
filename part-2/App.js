const App = () => {
  return (
    <div className="px-2 justify-content-center">
      <Tweet username="franklinkong981" name="Franklin Kong" message="Hello React!" date="12/15/2024"/>
      <Tweet username="jeffreykong981" name="Jeffrey Kong" message="I really like McDonald's especially the Big Mac" date="7/24/2023"/>
      <Tweet username="christhegreat" name="Chris Chen" message="I am so good at Minecraft!" date="5/30/2024"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));