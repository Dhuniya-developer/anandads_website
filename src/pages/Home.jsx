import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Icons import
import {
    FaArrowRight,
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
    FaGlobe
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
            className="pt-16"
        >
            {/* Hero Section */}
            <section className="min-h-[85vh] md:min-h-screen flex items-center pt-4 md:pt-12 relative overflow-hidden bg-white">
                <div className="absolute inset-0 hero-pattern opacity-50" />
                <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent hidden lg:block" />

                <motion.div
                    className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl"
                    animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-4 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-xl"
                    animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 md:py-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <AnimatedSection animation="fadeUp">
                                <span className="section-badge inline-flex items-center gap-2 text-xs sm:text-sm mb-3 md:mb-4">
                                    <FaAward className="text-xs sm:text-sm" />
                                    <span>The Modern Advertisers</span>
                                </span>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.1}>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-gray-900">
                                    Creative Ads That <br className="hidden sm:block" />
                                    <span className="gradient-text">Grow Your</span> <br className="hidden sm:block" />
                                    Business
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.2}>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg leading-relaxed">
                                    We help businesses achieve their goals through strategic advertising, creative design, and data-driven marketing solutions. For all types of advertisements.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.3}>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12">
                                    <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 text-sm sm:text-base">
                                        <span>Start Your Project</span>
                                        <FaArrowRight className="text-xs sm:text-sm" />
                                    </Link>
                                    <Link to="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 text-sm sm:text-base">
                                        <span>View Our Work</span>
                                    </Link>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fadeUp" delay={0.4}>
                                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                                    <div className="flex items-center gap-2 flex-1 min-w-[120px]">
                                        <FaRocket className="text-primary text-base sm:text-lg md:text-xl" />
                                        <div>
                                            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">500+</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Projects Completed</p>
                                        </div>
                                    </div>

                                    <div className="w-px h-6 md:h-8 bg-gray-200 hidden sm:block" />

                                    <div className="flex items-center gap-2 flex-1 min-w-[120px]">
                                        <FaHandshake className="text-primary text-base sm:text-lg md:text-xl" />
                                        <div>
                                            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">150+</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Happy Clients</p>
                                        </div>
                                    </div>

                                    <div className="w-px h-6 md:h-8 bg-gray-200 hidden sm:block" />

                                    <div className="flex items-center gap-2 flex-1 min-w-[120px]">
                                        <FaClock className="text-primary text-base sm:text-lg md:text-xl" />
                                        <div>
                                            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">10+</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Hero Image */}
                        <div className="relative hidden lg:block">
                            <AnimatedSection animation="fadeRight" delay={0.3}>
                                <div className="relative animate-float">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                                        alt="Team Meeting"
                                        className="rounded-2xl shadow-2xl"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <motion.div
                                        className="absolute -bottom-4 -left-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <FaChartLine className="text-green-600 text-sm sm:text-base" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-xs sm:text-sm">300%</p>
                                                <p className="text-gray-500 text-xs">ROI Increase</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="absolute -top-4 -right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <FaUsers className="text-primary text-sm sm:text-base" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-xs sm:text-sm">50M+</p>
                                                <p className="text-gray-500 text-xs">People Reached</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection animation="fadeUp">
                        <p className="text-center text-gray-500 mb-6 md:mb-8 font-medium text-sm sm:text-base">
                            Trusted by 150+ Companies Across India
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 opacity-60">
                        {['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'].map((company, index) => (
                            <motion.div
                                key={company}
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-400"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.6, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="pt-12 md:pt-16 pb-0 px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-xs sm:text-sm mb-3">Our Services</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                What We <span className="gradient-text">Offer</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                                Comprehensive advertising and marketing solutions for all types of advertisements
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                        {servicesData.slice(0, 6).map((service, index) => (
                            <div key={service.id} className="h-full">
                                <ServiceCard service={service} index={index} />
                            </div>
                        ))}
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-8 md:mt-10 pb-8 md:pb-10">
                        <Link to="/services" className="btn-secondary inline-flex items-center gap-2 py-2.5 px-5 sm:py-3 sm:px-6 text-sm sm:text-base">
                            <span>View All Services</span>
                            <FaArrowRight className="text-xs sm:text-sm" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section
                ref={statsRef}
                className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-primary via-primary-light to-primary text-white"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center p-3 sm:p-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                                    <div className="text-xl sm:text-2xl md:text-3xl text-white/80">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                                    {statsInView && (
                                        <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                                    )}
                                </div>
                                <p className="text-white/80 text-xs sm:text-sm md:text-base mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-xs sm:text-sm mb-3">Our Portfolio</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Recent <span className="gradient-text">Projects</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                                Explore our latest work and see how we've helped businesses grow
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                        {portfolioProjects.map((project, index) => (
                            <div key={project.id} className="h-full">
                                <PortfolioCard project={project} index={index} />
                            </div>
                        ))}
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.5} className="text-center mt-8 md:mt-10">
                        <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 py-2.5 px-5 sm:py-3 sm:px-6 text-sm sm:text-base">
                            <span>View All Projects</span>
                            <FaArrowRight className="text-xs sm:text-sm" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* About */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <AnimatedSection animation="fadeLeft">
                            <div className="relative">
                                <motion.img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                                    alt="Team"
                                    className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl w-full"
                                    whileHover={{ scale: 1.02 }}
                                />

                                <motion.div
                                    className="absolute -bottom-3 md:-bottom-6 -right-3 md:-right-6 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg border border-gray-100"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center text-white">
                                            <FaAward className="text-base md:text-lg" />
                                        </div>
                                        <div>
                                            <p className="text-xl md:text-2xl font-bold text-gray-900">10+</p>
                                            <p className="text-gray-500 text-xs md:text-sm">Years Experience</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeRight">
                            <span className="section-badge text-xs sm:text-sm mb-3">About Us</span>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-5">
                                We Are <span className="gradient-text">The Modern Advertisers</span>
                            </h2>

                            <p className="text-gray-600 mb-4 md:mb-5 leading-relaxed text-sm sm:text-base">
                                Anand Ads is a leading advertising agency dedicated to helping businesses grow through creative and effective marketing solutions.
                            </p>

                            <div className="space-y-3 md:space-y-3 mb-5 md:mb-6">
                                {features.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                                            {item.icon || <FaCheck className="text-primary text-xs md:text-sm" />}
                                        </div>
                                        <p className="font-medium text-gray-700 text-sm sm:text-base">{item.title}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/about" className="btn-primary inline-flex items-center gap-2 py-2.5 px-5 sm:py-3 sm:px-6 text-sm sm:text-base">
                                <span>Learn More About Us</span>
                                <FaArrowRight className="text-xs sm:text-sm" />
                            </Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-xs sm:text-sm mb-3">Our Process</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                How We <span className="gradient-text">Work</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                                Our proven 4-step process ensures successful project delivery
                            </p>
                        </AnimatedSection>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                className="text-center p-4 md:p-5 bg-white rounded-lg md:rounded-xl shadow-sm"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <motion.div
                                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-primary-light rounded-lg md:rounded-xl flex items-center justify-center text-white text-base md:text-lg lg:text-xl font-bold mx-auto mb-3 md:mb-4 relative"
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                >
                                    {step.icon || step.number}

                                    {index < 3 && (
                                        <div className="absolute -right-2 md:-right-3 lg:-right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                                            <FaArrowRight className="text-gray-300 text-xs" />
                                        </div>
                                    )}
                                </motion.div>

                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <AnimatedSection animation="fadeUp">
                            <span className="section-badge text-xs sm:text-sm mb-3">Testimonials</span>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.1}>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                What Our <span className="gradient-text">Clients Say</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeUp" delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                                Don't just take our word for it - hear from our satisfied clients
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection animation="fadeUp" delay={0.3}>
                        <TestimonialCarousel />
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-r from-primary via-primary-light to-primary text-white relative overflow-hidden">
                <motion.div
                    className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.div
                    className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-2xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <AnimatedSection animation="fadeUp">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                            Ready to Grow Your Business?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.1}>
                        <p className="text-white/90 mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
                            Let's create something amazing together. Get a free consultation today!
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
                            >
                                <span>Get Free Quote</span>
                            </Link>

                            <a
                                href="tel:+917032757575"
                                className="border-2 border-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <FaPhone className="text-xs sm:text-sm" />
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