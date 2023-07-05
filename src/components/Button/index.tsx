// Button Components NextUi
import { Button } from "@nextui-org/react";
// Button Props
import { ButtonProps } from "../../types/typesui/typesui";
export default function ButtonComponents(props: ButtonProps) {
  return (
    <Button color={props?.color} size={props?.size} className={props?.class}>
      {props?.children}
    </Button>
  );
}
