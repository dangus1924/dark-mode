import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
    const [value, setPersistentValue] = useLocalStorage('dark', false)

    const toggleValue = () => {
        setPersistentValue(!value)
    }
    
    return [value, toggleValue]
}