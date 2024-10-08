import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { ClipboardList, Plus } from "lucide-react";
import { useState } from "react";
import { Task } from "./card";

export default function TodoModalAddButton({
  addTask,
}: {
  addTask: (task: Task) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [input, setInput] = useState("");

  return (
    <>
      <Button onPress={onOpen} color="primary" isIconOnly className="ml-auto">
        <Plus />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={(e) => e.preventDefault()}>
              <ModalHeader className="flex flex-col gap-1">Create</ModalHeader>
              <ModalBody>
                <Input
                  required
                  value={input}
                  onValueChange={setInput}
                  autoFocus
                  type="text"
                  label="Task"
                  errorMessage={({ validationDetails }) =>
                    validationDetails.valueMissing ? "Please type task" : ""
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onPress={() => {
                    addTask({ isDone: false, title: input });
                    onClose();
                    setInput("");
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
