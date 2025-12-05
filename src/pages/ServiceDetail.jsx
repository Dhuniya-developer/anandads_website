import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getServiceById, servicesData } from '../data/servicesData'

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const service = getServiceById(serviceId)

    if (!service) {
        return <Navigate to="/services" replace />
    }

    // Convert Icon to Component
    const IconComponent = service.icon

    const relatedServices = servicesData
        .filter((s) => s.id !== serviceId)
        .slice(0, 3)

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
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center text-primary hover:underline mb-6"
                        >
                            ← Back to Services
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="section-badge flex items-center gap-2">
                                    <IconComponent className="text-primary text-lg" />
                                    {service.title}
                                </span>

                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                    {service.title}
                                </h1>

                                <p className="text-lg text-gray-600 mb-8">
                                    {service.fullDesc}
                                </p>

                                <Link to="/contact" className="btn-primary">
                                    Get Started →
                                </Link>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-2xl shadow-xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Features</span>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What's <span className="gradient-text">Included</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                            >
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    ✓
                                </div>

                                <p className="font-medium text-gray-700">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Related Services</span>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            You May Also <span className="gradient-text">Like</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedServices.map((relatedService, index) => {
                            const RelatedIcon = relatedService.icon

                            return (
                                <motion.div
                                    key={relatedService.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                    className="service-card group"
                                >
                                    <div className="service-icon mb-4 group">
                                        <RelatedIcon className="text-primary text-2xl group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {relatedService.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {relatedService.shortDesc}
                                    </p>

                                    <Link
                                        to={`/services/${relatedService.id}`}
                                        className="text-primary font-semibold hover:underline text-sm"
                                    >
                                        Learn More →
                                    </Link>
                                </motion.div>
                            )
                        })}
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
                            Ready to Get Started?
                        </h2>

                        <p className="text-red-100 mb-8 text-lg">
                            Contact us today to discuss your {service.title.toLowerCase()} requirements.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get Free Quote
                            </Link>

                            <a
                                href="tel:+917032757575"
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                            >
                                📞 7032 75 75 75
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default ServiceDetail
