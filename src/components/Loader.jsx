import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ loading }) => {
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="loader-wrapper"
                >
                    <div className="relative">
                        <div className="loader"></div>
                        <motion.div
                            className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary-light"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            style={{ width: 50, height: 50 }}
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 font-medium"
                    >
                        Loading...
                    </motion.p>
                    <motion.div
                        className="mt-2 text-xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="gradient-text">Anand</span> <span className="text-gray-800">Ads</span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader