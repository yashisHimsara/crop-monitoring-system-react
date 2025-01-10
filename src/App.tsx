import {createBrowserRouter, RouterProvider} from "react-router";
import {Crop} from "./pages/Crop.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {React} from "react";
import {Equipment} from "./pages/Equipment.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/crop', element : <Crop/>},
                { path : '/equipment', element : <Equipment/>},

            ]
        },
    ])

    return (
        <>
            <h1>HIIIIIII</h1>
                <RouterProvider router={routes} />
        </>
    );
}

export default App
