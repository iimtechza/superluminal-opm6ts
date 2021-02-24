import React, { useContext, createContext } from "react";

// const _App = React.createContext({});

const DEFAULT_STATE = { allFood: [], searchTerm: "" };

export const AppContext = React.createContext(DEFAULT_STATE);

// const { Provider, Consumer } = _App;

// const Provider = useContext(_App);
// const Consumer = useContext(_App);

// export default _App;
