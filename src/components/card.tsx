import {
  Card as C,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import Checkbox from "./checkbox";

export default function TodoCard() {
  return (
    <C className="max-w-[400px]">
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
      </CardHeader>
      <Divider />
      <CardBody>
        <Checkbox />
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
