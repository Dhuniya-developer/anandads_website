import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
    const IconComponent = service.icon; // FIX: Direct usage of icon component

    return (
        <motion.div
            className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col h-full group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Icon */}
            <div className="mb-4 sm:mb-5">
                <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl sm:text-2xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-light group-hover:text-white"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconComponent />
                </motion.div>
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-1">
                    {service.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3 min-h-[72px]">
                    {service.shortDesc}
                </p>
            </div>

            {/* Link */}
            <div className="mt-auto pt-3 border-t border-gray-100">
                <Link
                    to={`/services/${service.id}`}
                    className="text-primary font-semibold inline-flex items-center gap-2 group/link text-sm sm:text-base hover:text-primary-dark transition-colors"
                >
                    <span>Learn More</span>
                    <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FaArrowRight className="text-xs sm:text-sm" />
                    </motion.span>
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
