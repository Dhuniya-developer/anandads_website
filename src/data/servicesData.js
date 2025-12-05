// Import React Icons - Correct Names
import {
    FaFilm,
    FaLightbulb,
    FaInstagram,
    FaChalkboard,
    FaBroadcastTower,
    FaNewspaper,
    FaUmbrella,
    FaMapMarkerAlt,
    FaStore,
    FaTv
} from 'react-icons/fa'

export const servicesData = [
    {
        id: 'theatre-ads',
        title: 'Theatre Ads',
        shortDesc: 'Captivate audiences with powerful cinema advertising that makes a lasting impression.',
        fullDesc: 'Theatre advertising offers unparalleled engagement with audiences in a captive environment. Our theatre ads are designed to create maximum impact during the pre-show experience.',
        icon: FaFilm,
        features: [
            'On-screen video advertisements',
            'Lobby and standee branding',
            'Ticket and popcorn tub branding',
            'Premium cinema targeting',
            'Regional and national campaigns'
        ],
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800'
    },
    {
        id: 'concept-ads',
        title: 'Concept Ads',
        shortDesc: 'Creative concept development that brings your brand story to life with innovative ideas.',
        fullDesc: 'Our concept advertising services focus on creating unique, memorable campaigns that resonate with your target audience.',
        icon: FaLightbulb,
        features: [
            'Creative brainstorming sessions',
            'Storyboard development',
            'Brand narrative creation',
            'Multi-platform concept adaptation',
            'Campaign theme development'
        ],
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800'
    },
    {
        id: 'social-media-ads',
        title: 'Social Media Ads',
        shortDesc: 'Targeted social media campaigns that engage, convert, and build your online community.',
        fullDesc: 'Harness the power of social media with our comprehensive advertising solutions.',
        icon: FaInstagram,
        features: [
            'Facebook & Instagram advertising',
            'YouTube video campaigns',
            'LinkedIn B2B marketing',
            'Influencer collaborations',
            'Social media management'
        ],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800'
    },
    {
        id: 'hoardings',
        title: 'Hoardings',
        shortDesc: 'High-impact outdoor advertising with strategic hoarding placements.',
        fullDesc: 'Our hoarding advertising services ensure maximum visibility with strategic placements.',
        icon: FaChalkboard,
        features: [
            'Prime location selection',
            'Creative hoarding design',
            'Unipole and billboard advertising',
            'Illuminated hoardings',
            'Pan-city coverage options'
        ],
        image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800'
    },
    {
        id: 'fm-ads',
        title: 'FM Ads',
        shortDesc: 'Radio advertising that reaches millions of listeners.',
        fullDesc: 'FM radio advertising remains one of the most cost-effective ways to reach a broad audience.',
        icon: FaBroadcastTower,
        features: [
            'Jingle and script creation',
            'Prime time slot booking',
            'Multiple station coverage',
            'RJ mentions and endorsements',
            'Frequency optimization'
        ],
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800'
    },
    {
        id: 'newspaper-ads',
        title: 'Newspaper Ads',
        shortDesc: 'Print advertising in leading newspapers.',
        fullDesc: 'Newspaper advertising provides credibility and reaches a dedicated readership.',
        icon: FaNewspaper,
        features: [
            'Display advertisement design',
            'Classified ad placements',
            'Supplement and insert ads',
            'Full page and half page options',
            'Regional and national coverage'
        ],
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800'
    },
    {
        id: 'traffic-umbrellas',
        title: 'Traffic Umbrellas',
        shortDesc: 'High visibility branding at intersections.',
        fullDesc: 'Traffic umbrella advertising captures attention at busy intersections.',
        icon: FaUmbrella,
        features: [
            'Strategic intersection placement',
            'High visibility branding',
            'Daily commuter reach',
            'Weather-resistant materials',
            'City-wide coverage options'
        ],
        image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800'
    },
    {
        id: 'lollipop-ads',
        title: 'Lollipop Ads',
        shortDesc: 'Eye-catching lollipop signage for roadside branding.',
        fullDesc: 'Lollipop advertising boards provide excellent visibility in public places.',
        icon: FaMapMarkerAlt,
        features: [
            'Roadside placements',
            'Market area coverage',
            'Event-based advertising',
            'Quick installation',
            'Flexible campaign durations'
        ],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
    },
    {
        id: 'mall-activity',
        title: 'Mall Activity',
        shortDesc: 'Engaging mall activations and brand experiences.',
        fullDesc: 'Mall activations bring your brand to life with high-footfall engagement.',
        icon: FaStore,
        features: [
            'Kiosk and stall setups',
            'Product demonstrations',
            'Interactive brand experiences',
            'Promotional events',
            'Lead generation activities'
        ],
        image: 'https://images.unsplash.com/photo-1519567241046-7f570c1e1b5d?w=800'
    },
    {
        id: 'led-screens',
        title: 'LED Screens',
        shortDesc: 'Dynamic LED screen advertising with stunning visuals.',
        fullDesc: 'LED screen advertising offers eye-catching displays in urban areas.',
        icon: FaTv,
        features: [
            'Prime location screens',
            'Dynamic content display',
            'Multiple ad rotations',
            'HD video capability',
            'Real-time content updates'
        ],
        image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?w=800'
    }
]

export const getServiceById = (id) => {
    return servicesData.find(service => service.id === id);
}
