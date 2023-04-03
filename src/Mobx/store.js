import { makeAutoObservable, toJS } from "mobx"

const mainStore = makeAutoObservable({
    stringedDirectoriesTree : null,
    currentDirectoryStack : [],
    isLoggined : false,
    
    setIsLoggined(isLoggined){
        this.isLoggined = isLoggined
    },
    setCurrentDirectory(currentDirectory){
        this.currentDirectory = currentDirectory
    },
    pushCurrentDirectoryStack(directoryName){
        this.currentDirectoryStack.push(directoryName)
    },
    popCurrentDirectoryStack(){
        this.currentDirectoryStack.pop()
    },
    clearCurrentDirectoryStack(){
        this.currentDirectoryStack = []
    },
    setStringedDirectoriesTree(stringedDirectoriesTree){
        this.stringedDirectoriesTree = stringedDirectoriesTree
    },
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
})
export default mainStore;
