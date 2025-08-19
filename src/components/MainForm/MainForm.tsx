import { Button } from "../Button/Button";
import { Cycles } from "../Cycles/Cycles";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import { CirclePlay } from "lucide-react";

export function MainForm() {
  return (
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
  );
}
