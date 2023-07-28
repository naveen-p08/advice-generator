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
      <div className={"partition"}>
        <picture aria-hidden={true}>
          <source
            media="(min-width: 45em)"
            srcSet="./images/pattern-divider-desktop.svg"
          />
          <img
            src="./images/pattern-divider-mobile.svg"
            alt="divider pattern"
          />
        </picture>
      </div>
    </>
  );
}

export default App;
