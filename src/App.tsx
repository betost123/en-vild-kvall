import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem",
  },
}));

const truthData = [
  "Har du skitit på mig",
  "Har du varit otrogen",
  "Har du kastat ett glas i golvet",
  "Har du knullat ditt ex bästa kompis",
  "Vem är snyggast i rummet?",
  "Vem i rummet skicka hem om det var öråd på Robinson? Motivera.",
  "Har du legat med nån i rummet?",
  "Vem vill du helst ligga med i rummet?",
  "Vems mamma vill du helst ligga med?",
  "Har du haft sex med någon av det motsatta könet?",
];

const dareData = [
  "Busring ditt ex",
  "Personen till vänster får blanda en shot till dig som du måste dricka",
  "Du måste ha dina strumpor som handskar under hela spelets gång",
  "Under resten av spelet får du bra gå på toa om du ber som en duktig flicka",
  "Köp en pös åt alla andra, ta inte själv",
  "Svep glaset",
  "Rövpanga eller rövpanna, välj själv",
  "Sug på någons tår",
];

function App() {
  const classes = useStyles();
  const [truthIndex, setTruthIndex] = React.useState(
    Math.floor(Math.random() * truthData.length + 1)
  );
  const [dareIndex, setDareIndex] = React.useState(
    Math.floor(Math.random() * dareData.length + 1)
  );

  const onClickNext = () => {
    setTruthIndex(Math.floor(Math.random() * truthData.length + 1));
    setDareIndex(Math.floor(Math.random() * dareData.length + 1));
  };

  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        {truthData[truthIndex]}
        <br />
        <br />
        {dareData[dareIndex]}
        <br />
        <br />
        <Button onClick={onClickNext} variant="outlined">
          Nästa
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
