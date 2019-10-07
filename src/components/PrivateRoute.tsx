import { observer } from "mobx-react";
import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { authStore } from "../stores/AuthStore";

const PrivateRoute: any = observer(({ component: Component, ...rest }: any): any => {
    return (
        <Route
            {...rest}
            render={(props: any): any =>
                authStore.authToken ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
});

export { PrivateRoute };