import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const PortfolioCard = ({ project, index }) => {
    return (
        <motion.div
            className="group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <FaEye className="text-sm" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <FaExternalLinkAlt className="text-sm" />
                        </button>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">
                    {project.description}
                </p>
                <div className="text-xs text-gray-500 font-medium">
                    Click to view details →
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;