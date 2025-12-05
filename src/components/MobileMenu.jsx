import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MobileMenu = ({ isOpen, onClose }) => {
    const menuItems = [
        { path: '/', label: 'Home', icon: 'fas fa-home' },
        { path: '/services', label: 'Services', icon: 'fas fa-cogs' },
        { path: '/portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
        { path: '/about', label: 'About', icon: 'fas fa-users' },
        { path: '/testimonials', label: 'Testimonials', icon: 'fas fa-quote-left' },
        { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mobile-overlay active"
                        onClick={onClose}
                    />

                    {/* Menu */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="mobile-menu active"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold">
                                    <span className="gradient-text">Anand</span> Ads
                                </span>
                                <button
                                    onClick={onClose}
                                    className="text-2xl text-gray-600 hover:text-primary"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <nav className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink
                                            to={item.path}
                                            onClick={onClose}
                                            className={({ isActive }) =>
                                                `block py-3 px-4 rounded-lg hover:bg-red-50 font-medium text-gray-700 ${isActive ? 'bg-red-50 text-primary' : ''
                                                }`
                                            }
                                        >
                                            <i className={`${item.icon} w-6 text-primary`}></i>{' '}
                                            {item.label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <Link
                                    to="/contact"
                                    onClick={onClose}
                                    className="btn-primary block text-center"
                                >
                                    Get Free Quote
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8 pt-6 border-t border-gray-200"
                            >
                                <p className="text-gray-600 mb-2">Contact Us:</p>
                                <a
                                    href="tel:+917032757575"
                                    className="block text-primary font-semibold mb-1"
                                >
                                    <i className="fas fa-phone mr-2"></i>7032 75 75 75
                                </a>
                                <a
                                    href="tel:+919989468555"
                                    className="block text-primary font-semibold"
                                >
                                    <i className="fas fa-phone mr-2"></i>99894 68555
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu