import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// React Icons Import
import {
    FaBuilding,
    FaTrophy,
    FaBullseye,
    FaEye,
    FaArrowRight,
    FaLightbulb,
    FaHandshake,
    FaChartLine,
    FaHeart,
    FaLinkedinIn,
    FaTwitter,
    FaPhone
} from 'react-icons/fa';

const teamMembers = [
    {
        name: 'Anand Kumar',
        role: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        social: { linkedin: '#', twitter: '#' }
    },
    {
        name: 'Priya Sharma',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        social: { linkedin: '#', twitter: '#' }
    },
    {
        name: 'Rajesh Reddy',
        role: 'Marketing Head',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        social: { linkedin: '#', twitter: '#' }
    },
    {
        name: 'Kavitha Nair',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        social: { linkedin: '#', twitter: '#' }
    }
];

const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform advertising in Telangana' },
    { year: '2016', title: 'First Major Client', description: 'Partnered with leading theatre chains for ad placements' },
    { year: '2018', title: 'Digital Expansion', description: 'Launched digital advertising and social media services' },
    { year: '2020', title: '100+ Clients', description: 'Reached milestone of serving 100+ satisfied clients' },
    { year: '2022', title: 'Regional Leader', description: 'Became the leading advertising agency in Warangal' },
    { year: '2024', title: 'Innovation Hub', description: 'Launched new LED and digital signage solutions' }
];

// Values data with React Icon components
const valuesData = [
    { Icon: FaLightbulb, title: 'Innovation', description: 'Constantly pushing creative boundaries' },
    { Icon: FaHandshake, title: 'Integrity', description: 'Honest and transparent partnerships' },
    { Icon: FaChartLine, title: 'Results', description: 'Focused on measurable outcomes' },
    { Icon: FaHeart, title: 'Passion', description: 'Love for what we do every day' }
];

const About = () => {
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
                        className="text-center mb-16"
                    >
                        <span className="section-badge flex items-center justify-center gap-2">
                            About Us
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            The Modern <span className="gradient-text">Advertisers</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Anand Ads is a leading advertising agency dedicated to helping businesses
                            grow through creative and effective marketing solutions since 2014.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                                    alt="Our Team"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-2xl -z-10"></div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center text-white">
                                        <FaTrophy className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-gray-900">10+</p>
                                        <p className="text-gray-500">Years Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-badge">Our Story</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Building Brands, <span className="gradient-text">Creating Impact</span>
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in 2014, Anand Ads started with a simple mission: to provide
                                world-class advertising solutions to businesses in Telangana. What began
                                as a small agency has now grown into one of the region's most trusted
                                advertising partners.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our team combines creativity with strategic thinking to deliver campaigns
                                that not only look great but also drive real results. From theatre ads to
                                digital marketing, we offer comprehensive advertising solutions tailored
                                to each client's unique needs.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <FaBullseye className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                                        <p className="text-sm text-gray-600">Deliver impactful advertising that drives growth</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <FaEye className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Vision</h4>
                                        <p className="text-sm text-gray-600">Be the most trusted advertising partner</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                                Work With Us <FaArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Our Values</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valuesData.map((value, index) => {
                            const IconComponent = value.Icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-gray-100"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Our Journey</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Milestones & <span className="gradient-text">Achievements</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary-light hidden lg:block"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 inline-block">
                                            <span className="text-primary font-bold text-lg">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-2">{milestone.title}</h3>
                                            <p className="text-gray-600 mt-2">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                                    <div className="lg:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="section-badge">Our Team</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Meet The <span className="gradient-text">Experts</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our talented team brings diverse expertise and creative passion to every project
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                            <div className="flex gap-3">
                                                <a
                                                    href={member.social.linkedin}
                                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                                                >
                                                    <FaLinkedinIn />
                                                </a>
                                                <a
                                                    href={member.social.twitter}
                                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                                                >
                                                    <FaTwitter />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-primary font-medium">{member.role}</p>
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
                            Ready to Transform Your Brand?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Join 150+ businesses who trust Anand Ads for their advertising needs
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                            >
                                Get Started Today <FaArrowRight />
                            </Link>
                            <a
                                href="tel:+917032757575"
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center gap-2"
                            >
                                <FaPhone /> Call Us Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;