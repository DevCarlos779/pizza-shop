import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/auth/SignIn";
import { Dashboard } from "./pages/app/DashBoard";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

// export const router = createBrowserRouter([
//     { path: "/", element: <Dashboard /> },
//     { path: "/sign-in", element: <SignIn /> }
// ])

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
            
        </Routes>
    );
}