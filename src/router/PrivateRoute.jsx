import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {

    const auth = true
    return (
        <Route
            {...rest}
            render={props => (

                // If the token is set in the store the user can access the private pages
                auth ? (
                    <>
                        {children}
                    </>

                ) : (
                    // If the token is not present, we redirect to the login page
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            )}
        />
    );
}
export default PrivateRoute
