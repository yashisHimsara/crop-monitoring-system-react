import {createBrowserRouter, RouterProvider} from "react-router";
import {Crop} from "./pages/Crop.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {React} from "react";
import {Equipment} from "./pages/Equipment.tsx";
import {Monitoring} from "./pages/Monitoring.tsx";
import {Field} from "./pages/Field.tsx";
import {Staff} from "./pages/Staff.tsx";
import {User} from "./pages/User.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/crop', element : <Crop/>},
                { path : '/equipment', element : <Equipment/>},
                { path : '/monitoringLog', element : <Monitoring/>},
                { path : '/field', element : <Field/>},
                { path : '/staff', element : <Staff/>},
                { path : '/user', element : <User/>},
                { path : 'vehicle', element : <Vehicle/>},
            ]
        },
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App
