import { Container } from "../../components/Container/Container";
import { CountDown } from "../../components/CountDown/Countdoun";
import { MainForm } from "../../components/MainForm/MainForm";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

export function Home() {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
