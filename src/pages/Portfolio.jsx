import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
    FaBriefcase,
    FaExpand,
    FaFolderOpen,
    FaArrowRight,
    FaTimes
} from "react-icons/fa";

const portfolioData = [
    {
        id: 1,
        title: 'Theatre Ad Campaign',
        category: 'theatre',
        description: 'Cinematic advertising for major film releases',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600',
        client: 'PVR Cinemas',
        results: '2M+ Views'
    },
    {
        id: 2,
        title: 'Social Media Blitz',
        category: 'social',
        description: 'Viral social media campaign for fashion brand',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600',
        client: 'StyleHub',
        results: '500% Engagement'
    },
    {
        id: 3,
        title: 'Highway Hoarding',
        category: 'outdoor',
        description: 'Strategic outdoor advertising placement',
        image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600',
        client: 'AutoMax',
        results: '1M+ Daily Views'
    },
    {
        id: 4,
        title: 'FM Radio Jingle',
        category: 'audio',
        description: 'Catchy radio advertisement campaign',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600',
        client: 'FoodieHub',
        results: '3M+ Listeners'
    },
    {
        id: 5,
        title: 'Newspaper Full Page',
        category: 'print',
        description: 'Print media advertising campaign',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
        client: 'TechStart',
        results: '500K Readers'
    },
    {
        id: 6,
        title: 'LED Screen Campaign',
        category: 'digital',
        description: 'Dynamic LED advertising in prime locations',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
        client: 'MegaMart',
        results: '800K Views/Day'
    },
    {
        id: 7,
        title: 'Mall Activation',
        category: 'activation',
        description: 'Interactive brand activation in shopping malls',
        image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600',
        client: 'GreenLeaf',
        results: '50K Interactions'
    },
    {
        id: 8,
        title: 'Concept Video Ad',
        category: 'video',
        description: 'Creative concept video advertisement',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600',
        client: 'CloudTech',
        results: '5M+ Views'
    },
    {
        id: 9,
        title: 'Traffic Umbrella Ads',
        category: 'outdoor',
        description: 'Innovative traffic point advertising',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600',
        client: 'InsureSafe',
        results: '2M+ Daily Impressions'
    }
];

const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'theatre', name: 'Theatre Ads' },
    { id: 'social', name: 'Social Media' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'audio', name: 'FM/Audio' },
    { id: 'print', name: 'Print Media' },
    { id: 'digital', name: 'Digital' },
    { id: 'activation', name: 'Activations' },
    { id: 'video', name: 'Video' }
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredItems, setFilteredItems] = useState(portfolioData);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredItems(portfolioData);
        } else {
            setFilteredItems(portfolioData.filter(item => item.category === activeFilter));
        }
    }, [activeFilter]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="section-badge flex justify-center items-center gap-2">
                            <FaBriefcase /> Our Portfolio
                        </span>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our Creative <span className="gradient-text">Work</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our diverse portfolio of successful advertising campaigns
                            across various media platforms
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 px-6 lg:px-12 bg-white sticky top-20 z-30 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="portfolio-card h-[350px] relative overflow-hidden rounded-2xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-3">
                                                    {categories.find(c => c.id === item.category)?.name}
                                                </span>
                                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                <p className="text-white/80 text-sm mb-3">{item.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm">{item.client}</span>
                                                    <span className="text-sm font-semibold">{item.results}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                                            <FaExpand className="text-primary" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <FaFolderOpen className="text-6xl text-gray-300 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-400">No projects found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: '500+', label: 'Projects Completed' },
                            { number: '150+', label: 'Happy Clients' },
                            { number: '10+', label: 'Years Experience' },
                            { number: '12', label: 'Industry Awards' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-primary to-primary-light text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Want Your Brand Featured Here?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Let's create something amazing together. Start your project today!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start Your Project <FaArrowRight className="inline ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-[300px] lg:h-[400px]">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <FaTimes className="text-gray-600" />
                                </button>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                                    {categories.find(c => c.id === selectedItem.category)?.name}
                                </span>

                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {selectedItem.title}
                                </h2>

                                <p className="text-gray-600 mb-6">
                                    {selectedItem.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500">Client</p>
                                        <p className="font-semibold text-gray-900">{selectedItem.client}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Results</p>
                                        <p className="font-semibold text-primary">{selectedItem.results}</p>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    className="btn-primary inline-block"
                                >
                                    Start Similar Project <FaArrowRight className="inline ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
