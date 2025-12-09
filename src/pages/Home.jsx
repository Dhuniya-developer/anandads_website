import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Icons import
import {
    FaAward,
    FaChartLine,
    FaUsers,
    FaCheck,
    FaPhone,
    FaBullhorn,
    FaRocket,
    FaStar,
    FaHandshake,
    FaClock,
    FaGlobe,
    FaGraduationCap,
    FaHospital
} from 'react-icons/fa';

import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { servicesData } from '../data/servicesData';

const Home = () => {
    const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

    const stats = [
        { value: 500, label: 'Projects Completed', suffix: '+', icon: <FaRocket /> },
        { value: 150, label: 'Happy Clients', suffix: '+', icon: <FaHandshake /> },
        { value: 50, label: 'Team Members', suffix: '+', icon: <FaUsers /> },
        { value: 12, label: 'Awards Won', suffix: '+', icon: <FaAward /> },
    ];

    // ✅ Schools/Institutions Clients
    const schoolClients = [
        'Delhi Public School',
        'Ekashila Group of Institutions',
        'Oasis Public School',
        'Yazur Public School',
        'SPR School',
        'Tejaswi School',
        'Vibrant Academy',
        'Gravity Junior College',
        'City Mahila Degree College',
        'Birla International School'
    ];

    // ✅ Hospital Clients
    const hospitalClients = [
        'Sri Chakra Multi Speciality',
        'Prime Care Hospital',
        'S Vision Eye Hospital',
        'Rakshith Hospital',
        'Sameaksha Hospital',
        'Fathima Hospital',
        'Anjali Kidney Centre',
        'Abhinav Gastro',
        'Shine Clinics',
        'Dr. Anusha Reddy'
    ];

    const portfolioProjects = [
        { id: 1, title: 'Tech Brand Identity', category: 'Branding', description: 'Complete brand redesign', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600' },
        { id: 2, title: 'E-commerce Campaign', category: 'Digital Ads', description: 'Google & Facebook Ads', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600' },
        { id: 3, title: 'Fashion Brand Launch', category: 'Social Media', description: 'Instagram & Pinterest', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600' },
        { id: 4, title: 'Corporate Video', category: 'Video', description: 'Brand Storytelling', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600' },
        { id: 5, title: 'Startup Branding', category: 'Branding', description: 'Logo & Brand Identity', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600' },
        { id: 6, title: 'Product Launch', category: 'Digital Ads', description: 'Multi-platform Campaign', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600' },
    ];

    const processSteps = [
        { number: '01', title: 'Discovery', description: 'Understanding your business goals and target audience', icon: <FaGlobe /> },
        { number: '02', title: 'Strategy', description: 'Creating a tailored marketing strategy for success', icon: <FaBullhorn /> },
        { number: '03', title: 'Execution', description: 'Implementing campaigns with precision and creativity', icon: <FaRocket /> },
        { number: '04', title: 'Optimization', description: 'Analyzing results and optimizing for better performance', icon: <FaChartLine /> },
    ];

    const features = [
        { title: 'Theatre Ads & Concept Ads', icon: <FaBullhorn /> },
        { title: 'Social Media & Digital Marketing', icon: <FaGlobe /> },
        { title: 'Hoardings & FM Ads', icon: <FaRocket /> },
        { title: 'LED Screens & Mall Activities', icon: <FaStar /> }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-16 overflow-x-hidden"
        >
            {/* Hero Section */}
            <section className="min-h-[90vh] md:min-h-screen flex items-center pt-8 md:pt-0 relative overflow-hidden bg-white">
                <div className="absolute inset-0 hero-pattern opacity-50" />
                <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent hidden lg:block" />

                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
                    animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <AnimatedSection animation="fadeUp">
                                <span className="section-badge inline-flex items-center gap-2 text-sm mb-4">
                                    <span>The Modern Advertisers</span>
                                </span>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.1}>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                                    Creative Ads That <br />
                                    <span className="gradient-text">Grow Your</span> <br />
                                    Business
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.2}>
                                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    We help businesses achieve their goals through strategic advertising, creative design, and data-driven marketing solutions. For all types of advertisements.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.3}>
                                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                                    <Link
                                        to="/contact"
                                        className="btn-primary py-4 px-8 text-base font-semibold text-center"
                                    >
                                        Start Your Project
                                    </Link>

                                    <Link
                                        to="/portfolio"
                                        className="btn-secondary py-4 px-8 text-base font-semibold text-center"
                                    >
                                        View Our Work
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.4}>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                                        <div className="flex-shrink-0">
                                            <FaRocket className="text-primary text-2xl" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-3xl font-bold text-gray-900">500+</p>
                                            <p className="text-sm text-gray-600">Projects</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                                        <div className="flex-shrink-0">
                                            <FaHandshake className="text-primary text-2xl" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-3xl font-bold text-gray-900">150+</p>
                                            <p className="text-sm text-gray-600">Clients</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                                        <div className="flex-shrink-0">
                                            <FaClock className="text-primary text-2xl" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-3xl font-bold text-gray-900">10+</p>
                                            <p className="text-sm text-gray-600">Years</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Hero Image */}
                        <div className="relative hidden lg:block">
                            <AnimatedSection animation="fadeRight" delay={0.3}>
                                <div className="relative">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                                        alt="Team Meeting"
                                        className="rounded-2xl shadow-2xl w-full"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <motion.div
                                        className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaChartLine className="text-green-600 text-lg" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-xl">300%</p>
                                                <p className="text-gray-500 text-sm">ROI Increase</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <FaUsers className="text-primary text-lg" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-xl">50M+</p>
                                                <p className="text-gray-500 text-sm">Reached</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ NEW Clients Section with Schools & Hospitals */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp">
                        <div className="text-center mb-12">
                            <span className="section-badge text-sm mb-4">Our Clients</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                                Trusted by <span className="gradient-text">150+ Organizations</span>
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                Leading educational institutions and healthcare facilities across India trust us with their advertising needs
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Schools Section */}
                    <div className="mb-12">
                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FaGraduationCap className="text-blue-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Educational Institutions</h3>
                            </div>
                        </AnimatedSection>

                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: [0, -1920, 0] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...schoolClients, ...schoolClients].map((client, index) => (
                                    <motion.div
                                        key={`school-${index}`}
                                        className="flex-shrink-0 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                                {client.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-700 whitespace-nowrap">
                                                {client}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Hospitals Section */}
                    <div>
                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <FaHospital className="text-red-600 text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">Healthcare Partners</h3>
                            </div>
                        </AnimatedSection>

                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: [-1920, 0, -1920] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...hospitalClients, ...hospitalClients].map((client, index) => (
                                    <motion.div
                                        key={`hospital-${index}`}
                                        className="flex-shrink-0 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                                {client.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-700 whitespace-nowrap">
                                                {client}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <AnimatedSection animation="fadeUp" delay={0.3}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">20+</p>
                                <p className="text-gray-600 text-sm mt-1">Schools & Colleges</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">15+</p>
                                <p className="text-gray-600 text-sm mt-1">Hospitals & Clinics</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">100+</p>
                                <p className="text-gray-600 text-sm mt-1">Local Businesses</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">10+</p>
                                <p className="text-gray-600 text-sm mt-1">Years Partnership</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-sm mb-4">Our Services</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What We <span className="gradient-text">Offer</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Comprehensive advertising and marketing solutions for all types of advertisements
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.slice(0, 6).map((service, index) => (
                            <div key={service.id} className="h-full">
                                <ServiceCard service={service} index={index} />
                            </div>
                        ))}
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-12">
                        <Link
                            to="/services"
                            className="btn-secondary py-4 px-8 text-base font-semibold"
                        >
                            View All Services
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <section
                ref={statsRef}
                className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary-light to-primary text-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="text-3xl text-white/80">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-5xl font-bold mb-2">
                                    {statsInView && (
                                        <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                                    )}
                                </div>
                                <p className="text-white/90 text-base">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-sm mb-4">Our Portfolio</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Recent <span className="gradient-text">Projects</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Explore our latest work and see how we've helped businesses grow
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioProjects.map((project, index) => (
                            <div key={project.id} className="h-full">
                                <PortfolioCard project={project} index={index} />
                            </div>
                        ))}
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-12">
                        <Link
                            to="/portfolio"
                            className="btn-secondary py-4 px-8 text-base font-semibold"
                        >
                            View All Projects
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection animation="fadeLeft">
                            <div className="relative">
                                <motion.img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                                    alt="Team"
                                    className="rounded-2xl shadow-xl w-full"
                                    whileHover={{ scale: 1.02 }}
                                />

                                <motion.div
                                    className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                            <FaAward className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-900">10+</p>
                                            <p className="text-gray-500 text-sm">Years Experience</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeRight">
                            <div>
                                <span className="section-badge text-sm mb-4">About Us</span>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    We Are <span className="gradient-text">The Modern Advertisers</span>
                                </h2>

                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    Anand Ads is a leading advertising agency dedicated to helping businesses grow through creative and effective marketing solutions.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {features.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            className="flex items-center gap-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                {item.icon || <FaCheck className="text-primary text-lg" />}
                                            </div>
                                            <p className="font-medium text-gray-700 text-base">{item.title}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <Link
                                    to="/about"
                                    className="btn-primary py-4 px-8 text-base font-semibold"
                                >
                                    Learn More About Us
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-sm mb-4">Our Process</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                How We <span className="gradient-text">Work</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Our proven 4-step process ensures successful project delivery
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 relative"
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                >
                                    {step.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-sm mb-4">Testimonials</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What Our <span className="gradient-text">Clients Say</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Don't just take our word for it - hear from our satisfied clients
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.3}>
                        <TestimonialCarousel />
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary-light to-primary text-white relative overflow-hidden">
                <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.div
                    className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <AnimatedSection animation="fadeUp">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Grow Your Business?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.1}>
                        <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                            Let's create something amazing together. Get a free consultation today!
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-base shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Get Free Quote
                            </Link>

                            <a
                                href="tel:+917032757575"
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center gap-2 text-base hover:scale-105"
                            >
                                <FaPhone className="text-sm flex-shrink-0" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;