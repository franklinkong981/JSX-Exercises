const App = () => {
  return (
    <div>
      <Person name="Franklin" age={26} hobbies={["Reading magazines", "biking", "basketball", "Writing the Big Family World Trip"]}/>
      <Person name="Jeffrey" age={26} hobbies={["Walking", "Throwing parties", "Avoiding punishments"]}/>
      <Person name="Kenny" age={30} hobbies={["Sleeping", "Drinking coffee", "Coding"]}/>
      <Person name="Ted" age={9} hobbies={["Playing pranks", "Pranking Tara", "Playing Animal Crossing"]}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));