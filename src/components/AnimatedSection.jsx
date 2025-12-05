import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({
    children,
    className = '',
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    threshold = 0.1
}) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true,
    });

    const animations = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        fadeDown: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
        fadeRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
        scaleUp: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        rotateIn: {
            hidden: { opacity: 0, rotate: -10 },
            visible: { opacity: 1, rotate: 0 },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animations[animation]}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;