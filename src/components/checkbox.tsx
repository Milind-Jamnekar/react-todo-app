import {
  Button,
  Checkbox as Ch,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spacer,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import { Task } from "./card";

type Checkbox = Task & {
  removeTask: (task: Task) => void;
};

export default function Checkbox({ isDone, title, removeTask }: Checkbox) {
  return (
    <>
      <Ch
        aria-label={title}
        classNames={{
          base: cn(
            "inline-flex w-full max-w-full  bg-content1",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-2xl gap-2 px-3 border-2 border-content2",
            "data-[selected=true]:border-primary"
          ),
          label: "w-full align-center",
        }}
        defaultChecked={isDone}
        // onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between items-center  gap-2">
          <span>{title}</span>
          <div className="flex flex-col items-end gap-1">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button isIconOnly variant="bordered">
                  <Ellipsis />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem
                  onPress={() => removeTask({ title, isDone })}
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Ch>
      <Spacer y={6} />
    </>
  );
}
