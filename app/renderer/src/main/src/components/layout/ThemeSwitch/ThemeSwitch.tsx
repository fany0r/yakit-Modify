import React from 'react'  
import { Button } from 'antd'  
import { SunOutlined, MoonFilled } from '@ant-design/icons'  
import { useTheme } from '@/hook/useTheme'  
import styles from "./ThemeSwitch.module.scss"
  
export const ThemeSwitch: React.FC = () => {  
    const { theme, toggleTheme } = useTheme()  
  
    return (  
        <Button  
            type="text"  
            icon={theme === 'light' ? <MoonFilled /> : <SunOutlined />}  
            onClick={toggleTheme}  
            className={styles['theme-switch']}  
            title={theme === 'light' ? '切换到深色主题' : '切换到浅色主题'}  
        />  
    )  
}