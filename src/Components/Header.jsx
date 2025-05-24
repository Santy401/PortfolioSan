import { useState, useEffect } from 'react'
import './Styles/Header.css'
import { motion } from 'framer-motion'

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
                    <label className='desplegateBt' onClick={toggleMenu}>&#8943;</label>
                    <div className={`desplegable ${showMenu ? 'active' : 'inactive'}`}>
                        <a href="">Github</a>
                        <a href="">Email</a>
                        <div className='configTheme'>
                            <button onClick={() => setTheme('dark')}>D</button>
                            <button onClick={() => setTheme('system')}>S</button>
                            <button onClick={() => setTheme('light')}>L</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
