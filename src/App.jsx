function App() {
  const idNumber = 5;
  const advice =
    "For every complex problem there is an answer that is clear, simple, and wrong.";
  return (
    <>
      <div className={"advice-container"}>
        <p className={"number"}>
          Advice <span className={"highlight"}>#{idNumber}</span>
        </p>
        <p className={"advice-text"}>{advice}</p>
      </div>
    </>
  );
}

export default App;
