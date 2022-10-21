import React, { PropsWithChildren } from "react"

// state generic. 
export type IAppDispatchState<T> = React.Dispatch<React.SetStateAction<T>>;
export type IAppState<T> = [T, IDispatchState<T>];


// app component generic
export type AppComponentProps<T = {}> = PropsWithChildren<T>;