import { CirclePlay } from "lucide-react";
import { Container } from "./components/Container/Container";
import { CountDown } from "./components/CountDown/Countdoun";
import { Logo } from "./components/Logo/Logo";
import { Menu } from "./components/Menu/Menu";
import { DefaultInput } from "./components/DefaultInput/DefaultInput";
import "./styles/global.css";
import "./styles/theme.css";
import { Cycles } from "./components/Cycles/Cycles";
import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="formTask" action="">
          <div className="formTaskContent">
            <DefaultInput
              labelText="Task Work:"
              type="text"
              id="task"
              placeholder="Digite a tarefa"
              required
            />
          </div>

          <div className="formTaskContent">
            <p>
              Nesse clico <span>foque</span> por <span>25 minutos.</span>
            </p>
          </div>

          <div className="formTaskContent">
            <Cycles />
          </div>

          <div className="formTaskContent">
            <Button icon={<CirclePlay size={26} />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
