import {Navigation} from "../components/navigation.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}