import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaGraduationCap, FaHospital } from 'react-icons/fa';

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // ✅ Updated Testimonials with Real Clients
    const testimonials = [
        // Schools & Institutions
        {
            id: 1,
            name: 'Delhi Public School',
            role: 'Principal',
            category: 'school',
            content: 'Anand Ads helped us create an outstanding admission campaign. Their creative approach and professional execution resulted in a 40% increase in admissions. Highly recommended for educational institutions!',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Delhi+Public+School&background=3b82f6&color=fff&size=150'
        },
        {
            id: 2,
            name: 'Ekashila Group of Institutions',
            role: 'Director',
            category: 'school',
            content: 'Working with Anand Ads has been a fantastic experience. Their theatre ads and hoarding campaigns gave us excellent visibility across the city. Our brand recognition improved significantly.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Ekashila+Group&background=6366f1&color=fff&size=150'
        },
        {
            id: 3,
            name: 'Birla International School',
            role: 'Marketing Head',
            category: 'school',
            content: 'The digital marketing strategies implemented by Anand Ads exceeded our expectations. Their social media campaigns helped us reach parents across multiple cities effectively.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Birla+International&background=8b5cf6&color=fff&size=150'
        },
        {
            id: 4,
            name: 'Vibrant Academy',
            role: 'Founder',
            category: 'school',
            content: 'Anand Ads understood our vision perfectly. From concept ads to LED screen promotions, they handled everything professionally. Our student enrollment doubled in just one year!',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Vibrant+Academy&background=0ea5e9&color=fff&size=150'
        },
        {
            id: 5,
            name: 'Gravity Junior College',
            role: 'Administrator',
            category: 'school',
            content: 'Exceptional service and creative ideas! The FM radio ads and newspaper campaigns helped us reach rural areas effectively. Great ROI on our marketing investment.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Gravity+College&background=14b8a6&color=fff&size=150'
        },
        // Hospitals
        {
            id: 6,
            name: 'Sri Chakra Multi Speciality',
            role: 'Hospital Director',
            category: 'hospital',
            content: 'Anand Ads created an impactful health awareness campaign for us. Their professional video production and digital marketing helped us establish trust with patients across the region.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Sri+Chakra&background=ef4444&color=fff&size=150'
        },
        {
            id: 7,
            name: 'Prime Care Hospital',
            role: 'CEO',
            category: 'hospital',
            content: 'Outstanding work on our hospital branding! The hoardings and LED screen ads positioned us as a premier healthcare provider. Patient footfall increased by 60% after the campaign.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Prime+Care&background=f43f5e&color=fff&size=150'
        },
        {
            id: 8,
            name: 'S Vision Eye Hospital',
            role: 'Chief Doctor',
            category: 'hospital',
            content: 'The creative team at Anand Ads designed eye-catching campaigns for our eye care services. Their attention to detail and understanding of healthcare marketing is commendable.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=S+Vision&background=ec4899&color=fff&size=150'
        },
        {
            id: 9,
            name: 'Anjali Kidney Centre',
            role: 'Medical Director',
            category: 'hospital',
            content: 'Anand Ads helped us spread awareness about kidney health through their multi-platform advertising approach. Professional team with excellent communication throughout the project.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Anjali+Kidney&background=f97316&color=fff&size=150'
        },
        {
            id: 10,
            name: 'Dr. Anusha Reddy Clinic',
            role: 'Dermatologist',
            category: 'hospital',
            content: 'As a new clinic, we needed strong brand presence. Anand Ads delivered exceptional social media marketing and local advertising that helped us build a loyal patient base quickly.',
            rating: 5,
            image: 'https://ui-avatars.com/api/?name=Dr+Anusha&background=db2777&color=fff&size=150'
        }
    ];

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl min-h-[400px] md:min-h-[350px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 p-8 md:p-12"
                    >
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <FaQuoteLeft className="text-4xl text-primary/20" />
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                                "{currentTestimonial.content}"
                            </p>

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xl" />
                                ))}
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        src={currentTestimonial.image}
                                        alt={currentTestimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                                    />
                                    {/* Category Badge */}
                                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${currentTestimonial.category === 'school'
                                        ? 'bg-blue-500'
                                        : 'bg-red-500'
                                        }`}>
                                        {currentTestimonial.category === 'school' ? (
                                            <FaGraduationCap className="text-white text-xs" />
                                        ) : (
                                            <FaHospital className="text-white text-xs" />
                                        )}
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm flex items-center gap-2">
                                        {currentTestimonial.role}
                                        <span className={`px-2 py-0.5 rounded-full text-xs ${currentTestimonial.category === 'school'
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-red-100 text-red-600'
                                            }`}>
                                            {currentTestimonial.category === 'school' ? 'Education' : 'Healthcare'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all z-10"
            >
                <FaChevronLeft className="text-lg" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-all z-10"
            >
                <FaChevronRight className="text-lg" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-8 h-3 bg-primary'
                            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => {
                        const schoolIndex = testimonials.findIndex(t => t.category === 'school');
                        if (schoolIndex !== -1) {
                            setDirection(1);
                            setCurrentIndex(schoolIndex);
                        }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                    <FaGraduationCap />
                    <span>Schools</span>
                </button>
                <button
                    onClick={() => {
                        const hospitalIndex = testimonials.findIndex(t => t.category === 'hospital');
                        if (hospitalIndex !== -1) {
                            setDirection(1);
                            setCurrentIndex(hospitalIndex);
                        }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
                >
                    <FaHospital />
                    <span>Hospitals</span>
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;