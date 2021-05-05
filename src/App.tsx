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
  "Har du haft trekant?",
  "Har du sett dina föräldrar knulla?",
  "Har du berättat en lögn för någon i detta rum?",
  "Har du knarkat?",
  "Har du problem med droger?",
  "Stör du dig på Lois?",
  "Gillar du Lukas? Du får säga nej men då får du fan ge honom ett glas vin din hora",
  "Vill du knulla Betina",
  "Gillar du Justin Bieber?",
  "Vill du knulla Anders?",
  "Röker du mer holk än Isak?",
  "Har du kommmit i Isaks mamma?",
  "Har onanerat på jobbet?",
  "Har du någons rub one out hos en kompis?",
  "Tycker du Rolf är den finaste hunden i världen, om nej åker du ut ur spelet och får gå hem (och lämna både påse och alkohol här",
  "Om det brann, vem hade du räddat.. eller vad?",
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
  "Berätta varje person i rummets sämsta egenskap",
  "Rappa till Rap God",
  "Diska, du får även drick upp alla glas innan disken sker",
  "Ta Rolf på en promenad",
  "Hånga upp valfri tjej, eller den som räcker upp handen först",
  "Själ ett glas",
  "Själ en liten stickling",
  "Låt alla andra välja ett nummer du ska swisha och skriv i hälsning Tack för senast babe, jag älskar dig mer än min fru!",
  "Låt de andra spelarna lägga upp en Story",
  "Ät en vitlöksklyfta, ew äckligt du kommer lukra ur munnen",
  "Alla får hälla lite av sin dryck i ditt glas, sen måste du svepa upp",
  "Beställ biljetter till Danmarksbåten",
  "Förklara för Anders varför du ska rösta höger och försök att övertala honom",
  "Låt de andra ändra din frisyr hur de än vill",
  "Swisha din langare lite dricks för att han är en bror, sen fråga om du kan krasha hos han då han är ju en bror..",
  "Ring din mamma och berätta att du väntar barn, men inte med din partner",
  "Ge bort något du äger till person till höger",
  "Mejla din arbetsgivare att du kommer vara för bakis för att jobba nästa pass",
  "Ring din pinsammaste kompis/ eller den stördaste som du vet kommer att komma om du frågar",
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
    setTruthIndex(Math.floor(Math.random() * truthData.length));
    setDareIndex(Math.floor(Math.random() * dareData.length));
  };

  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        {truthData[truthIndex]}
        <br />
        <br />
        eller:
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
