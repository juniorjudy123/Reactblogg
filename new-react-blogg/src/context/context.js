import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};
// user: This property represents the user data or user object. In the initial state, it is set to null, indicating that there is no user data available.

// isFetching: This property is a boolean flag that indicates whether a network request or data fetching operation is in progress. In the initial state, it is set to false, indicating that no data fetching is happening initially.

// error: This property is a boolean flag that represents whether an error occurred during a data fetching operation. In the initial state, it is set to false, indicating that no errors have occurred initially.

// These properties serve as the initial values for the corresponding state properties in a Redux store. The values can be updated and managed throughout your application by dispatching actions and using reducers to handle state changes.

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]
    )

    return (<Context.Provider
        value={{

            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
        {children}
    </Context.Provider>

    );
}