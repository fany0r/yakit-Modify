import { useState, useEffect } from 'react'  
import { getLocalValue, setLocalValue } from '@/utils/kv'  
  
export type ThemeMode = 'light' | 'dark'  
  
export const useTheme = () => {  
    const [theme, setTheme] = useState<ThemeMode>('light')  
  
    useEffect(() => {  
        // 从本地存储读取主题设置  
        getLocalValue('yakit-theme').then((savedTheme) => {  
            if (savedTheme === 'dark' || savedTheme === 'light') {  
                setTheme(savedTheme)  
                document.documentElement.setAttribute('data-theme', savedTheme)  
            }  
        })  
    }, [])  
  
    const toggleTheme = () => {  
        const newTheme = theme === 'light' ? 'dark' : 'light'  
        setTheme(newTheme)  
        setLocalValue('yakit-theme', newTheme)  
        document.documentElement.setAttribute('data-theme', newTheme)  
    }  
  
    return { theme, toggleTheme }  
}