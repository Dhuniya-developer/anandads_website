import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaTimes, FaBars } from 'react-icons/fa' // 🔥 React Icons import
import Logo from '../assets/logo1.png'

const Navbar = ({ mobileMenuOpen = false, setMobileMenuOpen = () => { } }) => {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 🔥 Route change aithe menu close avuthundi
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location, setMobileMenuOpen])

    // 🔥 Menu open unte body scroll lock
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about', label: 'About' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 py-3 px-4 md:py-4 md:px-6 lg:px-8 xl:px-12 border-b border-gray-100 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* 🔥 LOGO */}
                    <Link to="/" className="flex items-center gap-3 z-50">
                        <img
                            src={Logo}
                            alt="Anand Ads Logo"
                            className="w-20 h-12 sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-lg object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative px-1 py-2 text-sm xl:text-base font-medium transition-colors hover:text-primary ${isActive
                                        ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full'
                                        : 'text-gray-700'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Contact Section */}
                    <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                        <a
                            href="tel:+917032757575"
                            className="hidden xl:flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm xl:text-base"
                        >
                            <FaPhone className="text-primary" /> {/* 🔥 React Icon */}
                            70327 57575
                        </a>
                        <Link to="/contact" className="btn-primary px-4 py-2 text-sm xl:text-base font-semibold">
                            Get Quote
                        </Link>
                    </div>

                    {/* 🔥 Mobile Menu Button - React Icons */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-primary transition-colors p-2 z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <FaTimes className="text-2xl" /> // 🔥 Close icon
                        ) : (
                            <FaBars className="text-2xl" /> // 🔥 Menu icon
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* 🔥 MOBILE MENU DRAWER */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Dark Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Slide-in Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
                        >
                            {/* Menu Header with Logo & Close */}
                            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                                <img
                                    src={Logo}
                                    alt="Anand Ads Logo"
                                    className="w-20 h-auto object-contain"
                                />
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-primary transition-colors p-2"
                                    aria-label="Close menu"
                                >
                                    <FaTimes className="text-2xl" /> {/* 🔥 React Icon */}
                                </button>
                            </div>

                            {/* Scrollable Nav Links */}
                            <div className="flex-1 overflow-y-auto py-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <NavLink
                                            to={item.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-3 px-4 text-base font-medium border-b border-gray-100 transition-all ${isActive
                                                    ? 'text-primary bg-primary/5 border-l-4 border-l-primary'
                                                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </motion.div>
                                ))}

                                {/* Phone Number - Mobile */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-6 px-4"
                                >
                                    <a
                                        href="tel:+917032757575"
                                        className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-50 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
                                    >
                                        <FaPhone className="text-primary text-lg" /> {/* 🔥 React Icon */}
                                        <span className="font-semibold text-base">7032 75 75 75</span>
                                    </a>
                                </motion.div>

                                {/* Get Quote Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-4 px-4 pb-6"
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="btn-primary w-full text-center block py-3 text-base font-semibold rounded-lg"
                                    >
                                        Get Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar