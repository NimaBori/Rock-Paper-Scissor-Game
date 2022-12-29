import { useState } from "react";
import Choices from "./components/Choices";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [wins, setWins] = useState([
    {
      id: 1,
      side: "player",
      winsNum: 0,
    },
    {
      id: 2,
      side: "comp",
      winsNum: 0,
    },
  ]);

  const [results, setResults] = useState([
    {
      id: 1,
      side: "player",
      tag: "",
    },
    {
      id: 2,
      side: "comp",
      tag: "",
    },
  ]);

  const [winner, setWinner] = useState("");

  const handleOnPick = (id, element) => {
    const randomNum = Math.floor(Math.random() * 3 + 1);
    handleSetResult("player", element);
    handleSetResult("comp", randomNum);
    calcResult(id, randomNum);
  };

  const handleSetResult = (side, cuurentTag) => {
    const newPlayerTag = results;

    if (side === "player") {
      newPlayerTag[0].tag = cuurentTag;
    } else if (side === "comp" && cuurentTag === 1) {
      newPlayerTag[1].tag = "faHandRock";
    } else if (side === "comp" && cuurentTag === 2) {
      newPlayerTag[1].tag = "faHandPaper";
    } else if (side === "comp" && cuurentTag === 3) {
      newPlayerTag[1].tag = "faHandScissors";
    }
    setResults(newPlayerTag);
  };

  const onWins = (side) => {
    setWins(
      wins.filter((win) =>
        win.side === side ? { ...win, winsNum: win.winsNum++ } : win
      )
    );
  };

  const calcResult = (playerPick, compPick) => {
    if (playerPick === compPick) {
      setWinner("Draw");
    } else if (
      (compPick === 1 && playerPick === 3) ||
      (compPick === 2 && playerPick === 1) ||
      (compPick === 3 && playerPick === 2)
    ) {
      onWins("comp");
      setWinner("lose");
    } else {
      onWins("player");
      setWinner("win");
    }
  };

  return (
    <main>
      <div className="title">
        <h1>Rock Paper Scissor Game</h1>
      </div>
      <section className="main-container">
        <Header wins={wins} />
        <Choices onPick={handleOnPick} />
        <Footer results={results} winner={winner} />
      </section>
    </main>
  );
}

export default App;
