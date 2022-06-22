import React from "react";
import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem",
  },
  text: {
    fontWeight: 600,
    fontSize: 20,
  },
}));

const truthData = [
  "Har du skitit på dig",
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
  "Har dina föräldrar jobbat svart?",
  "Vad tjänar du i månadedn?",
  "När blev du av med oskulden?",
  "Tycker du att du är bättre än de flesta i rummet?",
  "Tycker du att du är smartast i rummet?",
  "Hur ofta onanerar du?",
  "Vart onanerar du?",
  "Dina top tre sökningar när du ska kolla porr?",
  "Har du sett Ridskolan?",
  "Har du legat med samma person som ditt syskon?",
  "Har du legat med någon som är ful?",
  "Hur mycket pengar har du på kontot?",
  "Hur mycket spenderar du på droger varje månad?",
  "Har du alkoholproblem?",
  "Är du systembolagets bästa kund?",
  "Vad saknar du i livet?",
  "Vem har bäst och sämst musiksmak i rummet? Motivera förihelvete",
  "Vems flickvän hade du helst bangat (som i ligga)",
  "Vem har sämst kompisar?",
  "Vem ber oftast om pengar?",
  "Vem tar först slut på sina pengar?",
  "Vem är en bra vän men på gränsen till needy?",
  "Vem är latast och varför?",
  "Vem är en mamas boy/girl? (inga hens tillåtna)",
  "Vem har daddy issues?",
  "Vem i rummet hade du bjudit in sist till festen",
  "Vem behöver se en terapeut NU?",
  "Vem är fulast i rummet?",
  "Vem i rummet hade du helst bytt karriär med?",
  "Om du var med i Saw, vem i rummet hade du dödat om du satt fast i en såg?",
  "Du får välja alla utom två att ta med till en öde ö, vilka hade du lämnat?",
  "Vem är troligast att hamna i fängelse?",
  "Vem vill du inte presentera för dina föräldrar?",
  "Vem kommer dö när de är 40 av en överdos?",
  "Berätta om ditt bästa ligg",
  "Vilken egenskap önskar du att du l'rt dig som barn?",
  "Näm en crush du han, en internationell och en svensk",
  "Vad önskar du att fdu va bra på?",
  "Hade du hellre slutat dricka eller slutat ta droger?",
  "Det sprids et virys och för att rädda alla hadce du behövt offra en person. Vem hade du offrat? Hade du offrat en eller valt att no alla dog?",
  "Om du fått träffa en person som är död nu, vem hade du valt?",
  "Du får spendera dagen med vem du vill, vem hade du valt levadne/död? (du har en miljon kronor)",
  "Vilket lån hade du först betalat in på om du vann 10 000kr",
  "vems partner hade du valt",
  "Du får en triss av din kompis i födelsedagspresent. Du vinner 50 000kr. Hade du delat med kompisen som gav dig lotten?",
  "Hur gammal va du när du förlora oskulden?",
  "Hur gammal va första fyllan",
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
  "Stjäl ett glas",
  "Stjäl en liten stickling",
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
  "Ranka alla i rummet från snyggast till fulast",
  "Vems mamma knullar du helst?",
  "Adoptera en hund till Lois",
  "Sug Lukas kuk",
  "spring till grannen och fråga om de vill festa med oss",
  "twerka på senasten personnen som kom in i rummet",
  "låtsas att du är bartender och ta beställningar, om du får dricks är du värd ett extra lina",
  "vissla resten av låten som spelas tills den tar slut, om du misslyckas får du halsa ditt glas, good luck sucker!",
  "Ge en kärleksförklaring till den som sitter till höger om dig, om du ej kan hålla minen så fåt personen i fråga hälla upp valfri shot till dig",
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
    <div className='App'>
      <Header />
      <div className={classes.container}>
        <Typography className={classes.text}>
          {truthData[truthIndex]}
        </Typography>
        <br />
        <br />
        eller:
        <br />
        <br />
        <Typography className={classes.text}>{dareData[dareIndex]}</Typography>
        <br />
        <br />
        <Button onClick={onClickNext} variant='outlined'>
          Nästa
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
