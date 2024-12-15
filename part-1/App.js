const App = () => {
  return (
    <div>
      <FirstComponent/>
      <NamedComponent name="Franklin"/>
      <NamedComponent name="Jeffrey"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));