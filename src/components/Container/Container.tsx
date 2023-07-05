import { Container } from "@nextui-org/react";
import { ChildrenType } from "../../types/default";
const ContainerComponent = (props : ChildrenType) => (
    <Container>
        {props?.children}
    </Container>
)
export default ContainerComponent;