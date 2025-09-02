export type TaskModel = {
  id: string;
  name: string;
  duration: string;
  startDate: number | null; // quando o timer chegar ao fim
  interruptedDate: number; // quando o timer for interrompido
  type: "workTime" | "shortBreakTime" | "longBreakTime";
};
