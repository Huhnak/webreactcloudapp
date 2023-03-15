// import { configureStore, createStore } from "@reduxjs/toolkit";



// let initialState = {
//     currentDirectory: "/"
// }

// const store = createStore((state = initialState, action)=>{
//     switch(action.type){
//         case "SET_CURRENT_DIRECTORY": {
//             return state
//         };
//         default:
//             return state;
//     }
// });

// export const setCurrentDirectory = () => (
//     {
//         type: "SET_CURRENT_DIRECTORY"
//     }
// )
// window.store = store;
// export default store;

import { makeAutoObservable, toJS } from "mobx"
import { element } from "prop-types"

class MainStore{
    // реализовать движение по дереву с помощбю стека currentDirectory
    stringedDirectoriesTree = null
    currentDirectoryStack = []
    filteredDirectories = null
    isLoggined = false
    directoriesTree = null

    constructor() {
        makeAutoObservable(this)
    }
    setCurrentDirectory(currentDirectory){
        this.currentDirectory = currentDirectory
    }
    setDirectoriesTree(directoriesTree){
        this.directoriesTree = directoriesTree
    }
    pushCurrentDirectoryStack(directoryName){
        this.currentDirectoryStack.push(directoryName)
    }
    popCurrentDirectoryStack(){
        this.currentDirectoryStack.pop()
    }

    // setStringedDirectoriesTree(stringedDirectoriesTree){
    //     this.stringedDirectoriesTree = stringedDirectoriesTree
    //     function getNodes(object) {
    //         return Object
    //             .entries(object)
    //             .map(([key, value]) => value && typeof value === 'object'
    //                 ? { title: key, key, children: getNodes(value) }
    //                 : { title: key, key, value }
    //             );
    //     }
    //     const data = this.stringedDirectoriesTree
    //     this.setDirectoriesTree(getNodes(data))
    // }
    setStringedDirectoriesTree(stringedDirectoriesTree){
            this.stringedDirectoriesTree = stringedDirectoriesTree
    }
    getCurrentDirectoriesAndFiles(){
        let result = null
        if (!this.currentDirectoryStack){
            result = {
                directory: toJS(this.stringedDirectoriesTree).directory,
                file: toJS(this.stringedDirectoriesTree).file
            }
        }
        else{
            let currentDir = structuredClone(toJS(this.stringedDirectoriesTree))
            let currentDirectoryStackClone = structuredClone(toJS(this.currentDirectoryStack))
            currentDirectoryStackClone.forEach(element => {
                currentDir = currentDir['directory'][element]
            })
            result = {
                directory: currentDir.directory,
                file: currentDir.file
            }
        }
        return result
    }
    goIntoFolder(folderName){
        this.currentDirectoryStack.push(folderName)
    }
}

export default new MainStore;
