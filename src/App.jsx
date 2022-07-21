import Authmiddleware from "./router/Router";
import {Switch, BrowserRouter as Router} from "react-router-dom"
import {authProtectedRoutes, publicRoutes} from "./router/PrivateRoute";

function App() {

    return (
            <Router>
                <Switch>
                    {publicRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            component={route.component}
                            key={idx}
                            isAuthProtected={false}
                            exact
                        />
                    ))}
                    {authProtectedRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            component={route.component}
                            key={idx}
                            isAuthProtected={true}
                            exact
                        />
                    ))}
                </Switch>
            </Router>
    )
}

export default App
