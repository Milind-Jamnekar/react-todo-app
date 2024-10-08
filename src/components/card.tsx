import {
  Card as C,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  ScrollShadow,
} from "@nextui-org/react";
import { useState } from "react";
import Checkbox from "./checkbox";
import TodoModalAddButton from "./todo-modal-add";

export type Task = {
  isDone: boolean;
  title: string;
};

export default function TodoCard() {
  const [tasks, setTasks] = useState<Task[]>(() => [
    { isDone: true, title: "Setup react project with vite" },
    { isDone: false, title: "Setup Nextui" },
  ]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const removeTask = ({ title }: Task) => {
    const newTask = tasks.filter((task) => task.title !== title);
    setTasks(newTask);
  };

  return (
    <C className="w-[586px] h-[406px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="/android-chrome-512x512.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Todo App</p>
          <p className="text-small text-default-500">Sample project</p>
        </div>
        <TodoModalAddButton addTask={addTask} />
      </CardHeader>
      <Divider />
      <CardBody>
        <ScrollShadow className="p-2 h-[500px]">
          {tasks.map((task) => (
            <Checkbox
              removeTask={removeTask}
              key={task.title}
              isDone={task.isDone}
              title={task.title}
            />
          ))}
        </ScrollShadow>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </C>
  );
}
