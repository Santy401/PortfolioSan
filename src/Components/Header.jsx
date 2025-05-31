import { useState, useEffect } from 'react'
import './Styles/Header.css'
import { Menu, MoonStar, MonitorCog, Sun } from 'lucide-react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [theme, setTheme] = useState('system')
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'system'
        setTheme(saved)
    }, [])

    useEffect(() => {
        const root = document.documentElement

        const applyTheme = () => {
            if (theme === 'dark') {
                root.classList.add('dark')
                root.classList.remove('light')
            } else if (theme === 'light') {
                root.classList.add('light')
                root.classList.remove('dark')
            } else {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                root.classList.toggle('dark', isDark)
                root.classList.toggle('light', !isDark)
            }
        }

        applyTheme()
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="header">
            <span className={`logo ${scrolled ? 'centered-logo' : ''}`}>San</span>
            <nav className='navbar'>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>

                <div className='contentDesplegateBt'>
                    <label className='desplegateBt' ><Menu className='icon-menu' onClick={toggleMenu} /></label>
                    <div className={`desplegable ${showMenu ? 'active' : 'inactive'}`}>
                        <a href="">Github</a>
                        <a href="">Email</a>
                        <div className='configTheme'>
                            <button onClick={() => setTheme('dark')}><MoonStar className='icons'/></button>
                            <button onClick={() => setTheme('system')}><MonitorCog className='icons '/></button>
                            <button onClick={() => setTheme('light')}><Sun className='icons'/></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
