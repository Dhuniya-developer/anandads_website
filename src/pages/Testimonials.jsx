import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// React Icons Import
import {
    FaQuoteLeft,
    FaUsers,
    FaStar,
    FaThumbsUp,
    FaRedo,
    FaCommentSlash,
    FaPlay,
    FaTimes
} from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'CEO, TechStart India',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
        rating: 5,
        text: 'Anand Ads transformed our brand completely. Their creative approach and dedication to results exceeded our expectations. The theatre ad campaign they created for us reached millions of viewers!',
        category: 'Theatre Ads'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Marketing Head, RetailX',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
        rating: 5,
        text: 'The team\'s expertise in digital marketing helped us achieve 300% growth in just 6 months. Their data-driven approach and creative campaigns made all the difference.',
        category: 'Social Media'
    },
    {
        id: 3,
        name: 'Vikram Rao',
        role: 'Founder, FoodieHub',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
        rating: 5,
        text: 'Professional, creative, and result-oriented. Anand Ads is the best advertising partner we\'ve ever worked with. Their FM ad jingle became a local hit!',
        category: 'FM Ads'
    },
    {
        id: 4,
        name: 'Anita Singh',
        role: 'Director, StyleHub',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
        rating: 5,
        text: 'We saw immediate results after working with Anand Ads. Our social media presence grew by 500% and our sales doubled in 3 months! Incredible team!',
        category: 'Social Media'
    },
    {
        id: 5,
        name: 'Mahesh Joshi',
        role: 'Owner, GreenLeaf Organics',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        rating: 5,
        text: 'Outstanding hoarding and outdoor advertising campaign! They brought our brand story to life in ways we never imagined possible. Highly recommend!',
        category: 'Hoardings'
    },
    {
        id: 6,
        name: 'Suresh Krishnan',
        role: 'CTO, CloudTech Solutions',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200',
        rating: 5,
        text: 'Their LED screen advertising helped us reach our target audience effectively. The quality and placement of the content was exceptional!',
        category: 'LED Screens'
    },
    {
        id: 7,
        name: 'Lakshmi Devi',
        role: 'Founder, Ethnic Boutique',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
        rating: 5,
        text: 'The newspaper ad design was perfect! We received so many inquiries from the campaign. Anand Ads truly understands traditional media.',
        category: 'Newspaper Ads'
    },
    {
        id: 8,
        name: 'Krishna Murthy',
        role: 'MD, AutoMax Dealers',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
        rating: 5,
        text: 'The mall activation event was a huge success! The team managed everything professionally and we got excellent footfall and conversions.',
        category: 'Mall Activity'
    }
];

// Stats data with React Icon components
const statsData = [
    { Icon: FaUsers, number: '150+', label: 'Happy Clients' },
    { Icon: FaStar, number: '4.9', label: 'Average Rating' },
    { Icon: FaThumbsUp, number: '98%', label: 'Satisfaction Rate' },
    { Icon: FaRedo, number: '85%', label: 'Repeat Clients' }
];

// Video Testimonials Data - YouTube Videos
const videoTestimonials = [
    {
        id: 1,
        title: 'Theatre Advertising Success Story',
        client: 'Rajesh Kumar, TechStart',
        thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        duration: '2:30'
    },
    {
        id: 2,
        title: 'Digital Marketing Campaign Results',
        client: 'Priya Sharma, RetailX',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        duration: '3:15'
    },
    {
        id: 3,
        title: 'Outdoor Advertising Impact',
        client: 'Mahesh Joshi, GreenLeaf',
        thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
        videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        duration: '2:45'
    }
];

const Testimonials = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const categories = ['all', ...new Set(testimonials.map(t => t.category))];

    const filteredTestimonials = activeCategory === 'all'
        ? testimonials
        : testimonials.filter(t => t.category === activeCategory);

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
                        <span className="section-badge flex items-center justify-center gap-2">
                            Testimonials
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            What Our <span className="gradient-text">Clients Say</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it - hear from our satisfied clients
                            who have experienced the Anand Ads difference
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6 lg:px-12 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {statsData.map((stat, index) => {
                            const IconComponent = stat.Icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-white"
                                >
                                    <IconComponent className="text-3xl text-primary mb-3 mx-auto" />
                                    <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.number}</div>
                                    <p className="text-gray-400">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 px-6 lg:px-12 bg-white sticky top-20 z-30 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 capitalize ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category === 'all' ? 'All Reviews' : category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredTestimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => setSelectedTestimonial(testimonial)}
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <div className="relative mb-6">
                                        <FaQuoteLeft className="text-4xl text-primary/10 absolute -top-2 -left-2" />
                                        <p className="text-gray-600 leading-relaxed relative z-10 line-clamp-4">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                                        {testimonial.category}
                                    </span>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredTestimonials.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <FaCommentSlash className="text-6xl text-gray-300 mb-4 mx-auto" />
                            <h3 className="text-2xl font-bold text-gray-400">No reviews found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Video Testimonial Section - UPDATED */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="section-badge">Video Testimonials</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Watch What <span className="gradient-text">Clients Say</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Real stories from real clients. See how we helped transform their businesses.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoTestimonials.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200 relative shadow-lg">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center group-hover:via-black/60 transition-colors">
                                        {/* Play Button */}
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-xl mb-4">
                                            <FaPlay className="text-primary text-xl ml-1" />
                                        </div>

                                        {/* Duration Badge */}
                                        <span className="absolute top-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                                            {video.duration}
                                        </span>
                                    </div>

                                    {/* Video Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                                        <p className="text-white/80 text-sm">{video.client}</p>
                                    </div>
                                </div>
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
                            Ready to Join Our Happy Clients?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Let's create a success story together. Your brand deserves the best!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                to="/portfolio"
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial Modal */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        onClick={() => setSelectedTestimonial(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <FaTimes className="text-gray-600" />
                            </button>

                            <div className="flex gap-1 mb-6">
                                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xl" />
                                ))}
                            </div>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                "{selectedTestimonial.text}"
                            </p>

                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full mb-6">
                                {selectedTestimonial.category}
                            </span>

                            <div className="flex items-center gap-4">
                                <img
                                    src={selectedTestimonial.image}
                                    alt={selectedTestimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">{selectedTestimonial.name}</h4>
                                    <p className="text-gray-500">{selectedTestimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal - NEW */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <FaTimes className="text-white text-xl" />
                            </button>

                            {/* Video Title */}
                            <div className="mb-4 text-white">
                                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                                <p className="text-white/70">{selectedVideo.client}</p>
                            </div>

                            {/* YouTube Embed */}
                            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Testimonials;