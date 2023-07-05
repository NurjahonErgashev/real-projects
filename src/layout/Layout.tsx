import React from "react";
import { Footer, Header , NavItems} from "../components"
import { NextUiComponent } from "../ui/NextUi";
interface LayoutProps {
    children: React.ReactNode | React.ReactElement
};
export const LayoutProvider = (props: LayoutProps) => (
    <div className="layout-container">
        <Header />
        <NavItems/>
        <NextUiComponent>
        <main className="pages">
            {props?.children}
        </main>
        </NextUiComponent>
        <Footer />
    </div>
);