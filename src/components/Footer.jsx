import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaChevronRight,
    FaPhone,
    FaEnvelope,
    FaGlobe
} from "react-icons/fa";

import Logo from "../assets/footer.png";


const Footer = () => {
    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about', label: 'About Us' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        { path: '/services/theatre-ads', label: 'Theatre Ads' },
        { path: '/services/social-media-ads', label: 'Social Media Ads' },
        { path: '/services/hoardings', label: 'Hoardings' },
        { path: '/services/fm-ads', label: 'FM Ads' },
        { path: '/services/led-screens', label: 'LED Screens' },
    ];

    const socialLinks = [
        { icon: FaFacebookF, url: '#', color: 'hover:bg-blue-600' },
        { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600' },
        { icon: FaLinkedinIn, url: '#', color: 'hover:bg-blue-700' },
        { icon: FaTwitter, url: '#', color: 'hover:bg-sky-500' },
        { icon: FaYoutube, url: '#', color: 'hover:bg-red-600' },
    ];


    return (
        <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* About Section */}
                    <div>
                        <Link to="/" className="block mb-4">
                            {/* LOGO IMAGE */}
                            <img
                                src={Logo}
                                alt="Anand Ads Logo"
                                className="w-40 h-auto object-contain"
                            />
                        </Link>

                        {/* <p className="text-sm font-semibold text-primary-light mb-2">
                            THE MODERN ADVERTISERS
                        </p> */}

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            For all types of advertisements. Creating impactful advertising
                            solutions that drive results and build brands.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-colors`}
                                >
                                    <social.icon className="text-xl text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <FaChevronRight className="text-primary text-xs mr-2" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Our Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link
                                        to={service.path}
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <FaChevronRight className="text-primary text-xs mr-2" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <FaPhone className="text-primary mt-1" />
                                <div>
                                    <a href="tel:+917032757575" className="hover:text-white block">
                                        7032 75 75 75
                                    </a>
                                    <a href="tel:+919989468555" className="hover:text-white block">
                                        99894 68555
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <a
                                    href="mailto:anandadswgl@yahoo.com"
                                    className="hover:text-white"
                                >
                                    anandadswgl@yahoo.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaGlobe className="text-primary" />
                                <a
                                    href="https://www.anandads.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    www.anandads.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Anand Ads. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-gray-400 text-sm">
                        <Link to="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>

                        <Link to="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
