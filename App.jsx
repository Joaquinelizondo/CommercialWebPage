import "./App.css";
import { Comments1 } from "./componentes/Comments1/Comments1";
import { Footer1 } from "./componentes/Footer1/Footer1";
import { GetEarly1 } from "./componentes/GetEarly1/GetEarly1";
import { Header1 } from "./componentes/Header1/Header1";
import { Main1 } from "./componentes/Main1/Main1";
import { Navbar1 } from "./componentes/Navbar1/Navbar1";
import { StayProductive1 } from "./componentes/StayProductive1/StayProductive1";
/*import { Header } from "./componentes/Header/Header";
import { StayProductive } from "./componentes/StayProductive/StayProductive";
import { Comments } from "./componentes/Comments/Comments";
import { Footer } from "./componentes/Footer/Footer";
import { Main } from "./componentes/Main/Main";
import { GetEarly } from "./componentes/GetEarly/GetEarly";*/

export const App = () => {
  return (
    <>
      <Navbar1 />
      <Header1 />
      <Main1 />
      <StayProductive1 />
      <Comments1 />
      <div>
        <GetEarly1 />
      </div>
      <div>
        <Footer1 />
      </div>
    </>
  );
};

export default App;

/*
    <>
      <Navbar />
      <main>
        <Header />
        <Main />
        <StayProductive />
        <Comments />
      </main>
      <section>
        <GetEarly />
      </section>
      <Footer />
    </>
*/
