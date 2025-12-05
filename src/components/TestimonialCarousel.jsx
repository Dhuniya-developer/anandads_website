import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'CEO, TechStart India',
        initials: 'RK',
        content: 'Anand Ads transformed our brand completely. Their creative approach and dedication to results exceeded our expectations. Highly recommended for any advertising needs!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Marketing Head, RetailX',
        initials: 'PS',
        content: 'The team\'s expertise in digital marketing helped us achieve 300% growth in just 6 months. Their data-driven approach really works wonders!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Vikram Rao',
        role: 'Founder, FoodieHub',
        initials: 'VR',
        content: 'Professional, creative, and result-oriented. Anand Ads is the best advertising partner we\'ve ever worked with. Amazing team and great results!',
        rating: 5,
    },
    {
        id: 4,
        name: 'Anita Singh',
        role: 'Director, StyleHub',
        initials: 'AS',
        content: 'We saw immediate results after working with Anand Ads. Our social media presence grew by 500% and our sales doubled in 3 months!',
        rating: 5,
    },
    {
        id: 5,
        name: 'Mahesh Joshi',
        role: 'Owner, GreenLeaf Organics',
        initials: 'MJ',
        content: 'Outstanding video production and creative content! They brought our brand story to life in ways we never imagined possible.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Suresh Krishnan',
        role: 'CTO, CloudTech Solutions',
        initials: 'SK',
        content: 'Their theatre advertising campaign was phenomenal. We reached thousands of viewers and our brand recall increased significantly!',
        rating: 5,
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slidesPerView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - slidesPerView + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - slidesPerView + 1)) % (testimonials.length - slidesPerView + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + slidesPerView);

    return (
        <div className="relative">
            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                    {visibleTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card relative"
                            initial={{ opacity: 0, x: direction * 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 100 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 text-primary/10 text-4xl">
                                <FaQuoteLeft />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-10">
                <motion.button
                    onClick={prevSlide}
                    className="carousel-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowLeft />
                </motion.button>

                {/* Dots */}
                <div className="flex gap-2">
                    {[...Array(testimonials.length - slidesPerView + 1)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

                <motion.button
                    onClick={nextSlide}
                    className="carousel-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowRight />
                </motion.button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;