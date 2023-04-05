import { makeAutoObservable, toJS } from "mobx"

const mainStore = makeAutoObservable({
    stringedDirectoriesTree : null,
    currentDirectoryStack : [],
    isLoggined : false,

    isDirectoryEmpty(directoryName){
        let currentDirectoryStackClone = structuredClone(toJS(this.currentDirectoryStack))
        currentDirectoryStackClone
            ? currentDirectoryStackClone.push(directoryName)
            : currentDirectoryStackClone = [directoryName]
        
        let currentDirectoriesTree = structuredClone(toJS(this.stringedDirectoriesTree))
        currentDirectoryStackClone.forEach(element => {
            currentDirectoriesTree = currentDirectoriesTree['directory'][element]
        })
        if (Object.keys(currentDirectoriesTree['directory']).length || Object.keys(currentDirectoriesTree['file']).length)
            return false
        return true
    },
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
