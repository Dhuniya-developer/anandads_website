import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servicesData } from '../data/servicesData'

// React Icons
import {
    FaCogs,
    FaCheck,
    FaArrowRight,
    FaLightbulb,
    FaChartLine,
    FaHandshake,
    FaClock
} from 'react-icons/fa'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page-transition"
        >
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-30"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="section-badge flex items-center justify-center gap-2">
                            <FaCogs className="text-sm" /> Our Services
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Advertising <span className="gradient-text">Solutions</span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive advertising services for all your marketing needs.
                            From theatre ads to LED screens, we cover it all.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* All Services Grid */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {servicesData.map((service) => {
                            // Correct dynamic icon rendering
                            const IconComponent = service.icon

                            return (
                                <motion.div
                                    key={service.id}
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                    className="service-card group"
                                >
                                    {/* Icon */}
                                    <div className="service-icon mb-6 text-3xl text-primary 
                                        group-hover:text-white transition-all duration-300
                                        w-16 h-16 bg-primary/10 group-hover:bg-gradient-to-r 
                                        group-hover:from-primary group-hover:to-primary-light 
                                        rounded-xl flex items-center justify-center"
                                    >
                                        {IconComponent && <IconComponent />}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        {service.shortDesc}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-500">
                                                <FaCheck className="text-primary mr-2 text-xs" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/services/${service.id}`}
                                        className="text-primary font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                                    >
                                        Learn More <FaArrowRight className="text-sm" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Why Choose Us</span>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            The <span className="gradient-text">Anand Ads</span> Advantage
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaLightbulb />, title: 'Creative Excellence', desc: 'Innovative ideas that stand out' },
                            { icon: <FaChartLine />, title: 'Proven Results', desc: 'Track record of success' },
                            { icon: <FaHandshake />, title: 'Client Focus', desc: 'Your success is our priority' },
                            { icon: <FaClock />, title: 'Timely Delivery', desc: 'On-time, every time' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light 
                                    rounded-2xl flex items-center justify-center text-white mx-auto mb-4 text-2xl"
                                >
                                    {item.icon}
                                </div>

                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>

                                <p className="text-gray-600 text-sm">{item.desc}</p>
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
                            Need a Custom Solution?
                        </h2>

                        <p className="text-red-100 mb-8 text-lg">
                            Contact us to discuss your specific advertising requirements.
                        </p>

                        <Link
                            to="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        >
                            Get in Touch <FaArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Services
