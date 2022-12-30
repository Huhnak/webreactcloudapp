import { configureStore, createStore } from "@reduxjs/toolkit";

let initialState = {
    currentDirectory: "/"
}

const store = createStore((state = initialState, action)=>{
    switch(action.type){
        case "SET_CURRENT_DIRECTORY": {
            return state
        };
        default:
            return state;
    }
});

export const setCurrentDirectory = () => (
    {
        type: "SET_CURRENT_DIRECTORY"
    }
)
window.store = store;
export default store;