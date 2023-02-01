import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { actionTypes } from '../reducerManagement/actionType';
import { initialState, productReducer } from '../reducerManagement/productReducer';

export const productContext = createContext()
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            })
    }, [])
    const value = {
        state,
        dispatch
    }
    // console.log(state)
    return (
        <productContext.Provider value={value}>{children}</productContext.Provider>
    );
};

export default ProductProvider;