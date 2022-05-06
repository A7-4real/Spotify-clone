import React, { createContext, useContext, useReducer } from "react";

// Creating react context object
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// To get a value from the data layer or dispatch the action, it is way to get access to the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
