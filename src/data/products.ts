export interface Product {
    id: number;
    image: string;
    bgColor: string;
    title: string;
    description?: string;
}

export const productItems: Product[] = [
    {
        id: 1,
        image: '/src/assets/images/img1.jpg',
        bgColor: 'bg-amber-100',
        title: 'Premium Packaging',
        description: 'Bespoke packaging solutions for luxury brands that demand excellence.'
    },
    {
        id: 2,
        image: '/src/assets/images/img2.jpg',
        bgColor: 'bg-lime-400',
        title: 'Bold Designs',
        description: 'Vibrant and energetic brand identities that stand out in crowded markets.'
    },
    {
        id: 3,
        image: '/src/assets/images/img3.jpg',
        bgColor: 'bg-yellow-300',
        title: 'Creative Solutions',
        description: 'Innovative approaches to complex design challenges that drive engagement.'
    },
    {
        id: 4,
        image: '/src/assets/images/img4.jpg',
        bgColor: 'bg-red-500',
        title: 'Brand Identity',
        description: 'Cohesive and powerful visual languages that define brand essence.'
    },
    {
        id: 5,
        image: '/src/assets/images/img5.jpg',
        bgColor: 'bg-slate-800',
        title: 'Modern Branding',
        description: 'Sleek and contemporary aesthetics for the modern digital era.'
    },
    {
        id: 6,
        image: '/src/assets/images/img6.jpg',
        bgColor: 'bg-white',
        title: 'Clean Design',
        description: 'Minimalist and functional design principles that focus on clarity.'
    },
    {
        id: 7,
        image: '/src/assets/images/img7.jpg',
        bgColor: 'bg-blue-400',
        title: 'Tech Innovation',
        description: 'Visualizing the future through cutting-edge technology branding.'
    },
    {
        id: 8,
        image: '/src/assets/images/img8.jpg',
        bgColor: 'bg-orange-300',
        title: 'Studio Lighting',
        description: 'Expert art direction and photography for high-end product launches.'
    },
    {
        id: 9,
        image: '/src/assets/images/img9.jpg',
        bgColor: 'bg-purple-400',
        title: 'Creative Direction',
        description: 'Strategic visual storytelling that connects brands with their audience.'
    },
    {
        id: 10,
        image: '/src/assets/images/img10.jpg',
        bgColor: 'bg-green-400',
        title: 'Sustainable Design',
        description: 'Eco-friendly packaging solutions that prioritize environmental responsibility.'
    },
    {
        id: 11,
        image: '/src/assets/images/img11.jpg',
        bgColor: 'bg-pink-400',
        title: 'Luxury Branding',
        description: 'Elegant and sophisticated brand experiences for premium markets.'
    },
    {
        id: 12,
        image: '/src/assets/images/img12.jpg',
        bgColor: 'bg-indigo-400',
        title: 'Digital Innovation',
        description: 'Cutting-edge digital experiences that transform user engagement.'
    }
];
