import React from "react";
import { Link as NextUiLink } from "@nextui-org/react"
interface LinkProps {
    href?: string;
    children: React.ReactNode
}
const Link = (props: LinkProps) => (
    <NextUiLink>{props?.children}</NextUiLink>
);
export default Link;