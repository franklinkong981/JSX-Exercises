const Person = ({name, age, hobbies}) => {
  const displayedName= (name.length > 8) ? name.substring(0, 6) : name;
  const voteMessage = (age >= 18) ? "Please go vote!" : "You must be 18";
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>Name: {displayedName}</p>
      <p>Age: {age}</p>
      <h3>Can you vote? {voteMessage}</h3>
      <p>List of hobbies:</p>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
    </div>
  );
};