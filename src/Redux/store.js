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

import { makeAutoObservable } from "mobx"

class MainStore{
    directoriesTree = null
    currentDirectory = null
    filteredDirectories = null
    isLoggined = false

    constructor() {
        makeAutoObservable(this)
    }
    setCurrentDirectory(currentDirectory){
        this.currentDirectory = currentDirectory
    }
    setFilteredDirectories(filteredDirectories){
        this.filteredDirectories = filteredDirectories
    }
    setDirectoriesTree(directoriesTree){
        this.directoriesTree = directoriesTree
    }
    //    test\/dgdfgdf\/
    getUniqueDirectories(){
        let regex = null;
        if (!this.currentDirectory)
            regex = new RegExp('^[\\wА-я_\\s\\-()\\[\\]{}.]+');
        else
            regex = new RegExp(`^${this.currentDirectory}[\\wА-я_\\s\\-()\\[\\]{}.]+`);
        const filteredMap = this.directoriesTree.Directories.map(item => regex.exec(item)).filter(Boolean)
        const filtered = filteredMap.map(item => item[0].trim()).filter((value, index, self) => self.indexOf(value) === index);
        const result = filtered.map(item => item.split('/').at(-1));
        return result
    }
    getFilesCurrentDirectory(){
        console.log(this.currentDirectory)
        console.log(this.directoriesTree.Files)
        console.log()
    }
}

export default new MainStore;
