import useLocalStorage from './useLocalStorage.js'

const useDarkMode = (darkMode)=> {
    const [name, setName] = useLocalStorage('name', darkMode);
        console.log(name)
        return [name, setName]
}
export default useDarkMode;