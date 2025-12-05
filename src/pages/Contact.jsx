import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaPhone,
    FaEnvelope,
    FaGlobe,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle,
    FaClock,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaChevronDown,
    FaSpinner,
    FaWhatsapp
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdLanguage } from 'react-icons/md';
import { BsGlobe, BsTelephone, BsEnvelope, BsClock } from 'react-icons/bs';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });

        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-xl" />,
            title: 'Call Us',
            details: ['7032 75 75 75', '99894 68555'],
            link: 'tel:+917032757575'
        },
        {
            icon: <FaEnvelope className="text-xl" />,
            title: 'Email Us',
            details: ['anandadswgl@yahoo.com'],
            link: 'mailto:anandadswgl@yahoo.com'
        },
        {
            icon: <FaGlobe className="text-xl" />,
            title: 'Website',
            details: ['www.anandads.com'],
            link: 'https://www.anandads.com'
        },
        {
            icon: <FaMapMarkerAlt className="text-xl" />,
            title: 'Visit Us',
            details: ['Warangal, Telangana', 'India'],
            link: '#map'
        }
    ];

    const services = [
        'Theatre Ads',
        'Concept Ads',
        'Social Media Ads',
        'Hoardings',
        'FM Ads',
        'Newspaper Ads',
        'Traffic Umbrellas',
        'Lollipop Ads',
        'Mall Activity',
        'LED Screens',
        'Other'
    ];

    const faqs = [
        {
            question: 'What types of advertising services do you offer?',
            answer: 'We offer a comprehensive range of advertising services including Theatre Ads, Concept Ads, Social Media Ads, Hoardings, FM Ads, Newspaper Ads, Traffic Umbrellas, Lollipop Ads, Mall Activity, and LED Screens.'
        },
        {
            question: 'How long does it take to start a campaign?',
            answer: 'Depending on the type of campaign, we can typically get your advertising started within 1-2 weeks. Complex campaigns may require additional planning time.'
        },
        {
            question: 'Do you work with small businesses?',
            answer: 'Absolutely! We work with businesses of all sizes and have customized packages to fit different budgets and requirements.'
        },
        {
            question: 'What areas do you serve?',
            answer: 'We primarily serve Warangal and surrounding areas in Telangana, but we can also execute campaigns across major cities in India.'
        },
        {
            question: 'How can I track the performance of my ads?',
            answer: 'We provide detailed analytics and reports for digital campaigns. For traditional media, we offer reach estimates and post-campaign analysis.'
        }
    ];

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
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
                        <span className="section-badge inline-flex items-center gap-2">
                            <FaEnvelope className="text-sm" />
                            <span>Contact Us</span>
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have a project in mind? Let's discuss how we can help your business
                            reach new heights with our advertising solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-6 lg:px-12 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                                {info.details.map((detail, i) => (
                                    <p key={i} className="text-gray-600">{detail}</p>
                                ))}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Send Us a <span className="gradient-text">Message</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Required *
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="form-input resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FaPaperPlane />
                                        </>
                                    )}
                                </button>

                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-xl" />
                                        <span>Thank you! Your message has been sent successfully.</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Map */}
                            <div id="map" className="h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698726854!2d79.26893864677776!3d17.947424055866137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345e37e41e7e1%3A0x7a2e4d3c2c8e3b43!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Anand Ads Location"
                                ></iframe>
                            </div>

                            {/* Working Hours */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <FaClock className="text-primary" />
                                    <span>Working Hours</span>
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-semibold text-gray-900">9:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-semibold text-gray-900">9:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-semibold text-primary">Closed</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8">
                                    <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                                    <div className="flex gap-3">
                                        {[
                                            { icon: <FaFacebookF />, color: 'hover:bg-blue-600', link: 'https://facebook.com' },
                                            { icon: <FaInstagram />, color: 'hover:bg-pink-600', link: 'https://instagram.com' },
                                            { icon: <FaLinkedinIn />, color: 'hover:bg-blue-700', link: 'https://linkedin.com' },
                                            { icon: <FaTwitter />, color: 'hover:bg-sky-500', link: 'https://twitter.com' },
                                            { icon: <FaYoutube />, color: 'hover:bg-red-600', link: 'https://youtube.com' },
                                            { icon: <FaWhatsapp />, color: 'hover:bg-green-600', link: 'https://wa.me/917032757575' }
                                        ].map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all shadow-sm border border-gray-200`}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="section-badge">FAQ</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left font-semibold text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown className="text-primary" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: expandedFaq === index ? 'auto' : 0,
                                        opacity: expandedFaq === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-600 px-6 pb-6">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
                <motion.div
                    className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Ready to Boost Your Business?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Call us now for a free consultation and let's discuss your advertising needs
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="tel:+917032757575"
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPhone />
                                <span>7032 75 75 75</span>
                            </motion.a>
                            <motion.a
                                href="tel:+919989468555"
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPhone />
                                <span>99894 68555</span>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/917032757575"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 border-2 border-green-500 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;