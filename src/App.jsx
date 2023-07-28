import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("Press the Button to get a advice");
  const [idNumber, setIdNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const URL = "https://api.adviceslip.com/advice";

  async function handleClick() {
    try {
      setIsLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setAdvice(data.slip.advice);
      setIdNumber(data.slip.id);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className={"advice-container"}>
        <p className={"number"}>
          {idNumber === 0 ? (
            " "
          ) : (
            <>
              Advice <span className={"highlight"}>#{idNumber}</span>
            </>
          )}
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

      <button
        className={"fetch-button"}
        onClick={handleClick}
        disabled={isLoading}
        autoFocus={isLoading}
      >
        <span className={"visually-hidden"}>Get Advice</span>
        <img src="./images/icon-dice.svg" alt="dice icon" aria-hidden={true} />
      </button>
    </>
  );
}

export default App;
