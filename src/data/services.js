import {
    MdKitchen,
    MdBathtub,
    MdLiving,
    MdFormatPaint,
    MdGridOn,
    MdChair,
    MdHome,
    MdRoofing,
    MdDesignServices,
    MdHomeWork,
} from "react-icons/md";

import Tiles from "../assets/images/services/Tiles.png"
import interior from "../assets/images/services/interior.png"

const services = [
    {
        id: "tile-installation",
        title: "Tile Installation",
        image: Tiles,
        shortDescription: "Premium tile fitting for floors, walls, and outdoor spaces with precision craftsmanship.",
        description:
            "Transform your spaces with expert tile installation services. We work with ceramic, porcelain, vitrified, and natural stone tiles to deliver flawless finishes for floors, walls, backsplashes, and outdoor areas. Our skilled artisans ensure precise alignment, durable grouting, and a finish that lasts for decades.",
        icon: MdGridOn,
        features: [
            "Floor & wall tiling",
            "Backsplash installation",
            "Outdoor & patio tiles",
            "Waterproof tiling for wet areas",
            "Custom mosaic and pattern work",
        ],
    },
    {
        id: "interior-design",
        title: "Interior Design",
        image: interior,
        shortDescription: "Complete interior design solutions that blend aesthetics with functionality.",
        description:
            "Our interior design team brings your vision to life with thoughtful space planning, material selection, and bespoke furniture layouts. Whether it's a cozy apartment or a grand villa, we create interiors that reflect your personality while maximizing comfort and functionality.",
        icon: MdDesignServices,
        features: [
            "Space planning & 3D visualization",
            "Material & color consultation",
            "Furniture layout design",
            "Lighting design",
            "Complete project management",
        ],
    },
    {
        id: "modular-kitchen",
        title: "Modular Kitchen",
        image: Tiles,
        shortDescription: "Stylish and efficient modular kitchens designed for modern living.",
        description:
            "Upgrade to a modular kitchen that combines sleek design with smart storage. We design L-shaped, U-shaped, island, and parallel kitchen layouts with premium hardware, soft-close mechanisms, and durable countertops tailored to your cooking style and family needs.",
        icon: MdKitchen,
        features: [
            "L-shape, U-shape & island layouts",
            "Soft-close cabinets & drawers",
            "Granite & quartz countertops",
            "Built-in appliance integration",
            "Custom pantry & storage solutions",
        ],
    },
    {
        id: "bathroom-renovation",
        title: "Bathroom Renovation",
        image: Tiles,
        shortDescription: "Luxurious bathroom makeovers with modern fixtures and elegant finishes.",
        description:
            "Reimagine your bathroom with our end-to-end renovation services. From waterproofing and plumbing to premium sanitary ware and designer tiles, we create spa-like bathrooms that offer luxury, hygiene, and lasting durability.",
        icon: MdBathtub,
        features: [
            "Complete bathroom remodeling",
            "Waterproofing & plumbing",
            "Premium sanitary ware installation",
            "Shower enclosure & bathtub fitting",
            "Anti-skid flooring solutions",
        ],
    },
    {
        id: "living-room-design",
        title: "Living Room Design",
        image: Tiles,
        shortDescription: "Elegant living room interiors that make a lasting first impression.",
        description:
            "Your living room is where first impressions are made. We design stunning living spaces with feature walls, ambient lighting, custom furniture arrangements, and smart storage — creating rooms that are both beautiful and functional for everyday living.",
        icon: MdLiving,
        features: [
            "Feature wall & accent design",
            "Custom sofa & seating arrangements",
            "Ambient & task lighting",
            "TV unit & entertainment center",
            "Open-plan & partition design",
        ],
    },
    {
        id: "false-ceiling",
        title: "False Ceiling",
        image: Tiles,
        shortDescription: "Designer false ceilings with integrated lighting for every room.",
        description:
            "Elevate your interiors with beautifully crafted false ceilings. We offer gypsum, POP, wooden, and PVC ceiling options with cove lighting, recessed panels, and contemporary geometric designs that add depth and character to any room.",
        icon: MdRoofing,
        features: [
            "Gypsum & POP ceilings",
            "Wooden & PVC panel ceilings",
            "Cove & recessed lighting integration",
            "Multi-level designer ceilings",
            "Acoustic ceiling solutions",
        ],
    },
    {
        id: "painting",
        title: "Painting",
        image: Tiles,
        shortDescription: "Professional painting services with premium finishes and textures.",
        description:
            "Give your home a fresh look with our professional painting services. We offer interior and exterior painting, texture finishes, stencil art, and waterproof coatings using top-brand paints that resist fading, cracking, and weather damage.",
        icon: MdFormatPaint,
        features: [
            "Interior & exterior painting",
            "Texture & designer finishes",
            "Waterproof & anti-fungal coatings",
            "Stencil & accent wall painting",
            "Wood & metal surface painting",
        ],
    },
    {
        id: "flooring",
        title: "Flooring",
        image: Tiles,
        shortDescription: "Premium flooring solutions from marble to engineered wood.",
        description:
            "Choose from a wide range of flooring options including marble, granite, vitrified tiles, wooden, laminate, and vinyl flooring. Our team ensures precise leveling, seamless joints, and a polished finish that enhances the beauty of every room.",
        icon: MdGridOn,
        features: [
            "Marble & granite flooring",
            "Wooden & laminate flooring",
            "Vinyl & SPC flooring",
            "Floor polishing & restoration",
            "Epoxy & industrial flooring",
        ],
    },
    {
        id: "custom-furniture",
        title: "Custom Furniture",
        image: Tiles,
        shortDescription: "Bespoke furniture pieces crafted to fit your space and style.",
        description:
            "Get furniture that is made just for you. Our carpenters design and build custom wardrobes, bookshelves, TV units, study tables, bed frames, and dining sets using premium-grade wood and hardware — ensuring perfect fit and long-lasting quality.",
        icon: MdChair,
        features: [
            "Custom wardrobes & walk-in closets",
            "Bookshelves & display units",
            "Study tables & workstations",
            "Bed frames & headboards",
            "Dining tables & seating",
        ],
    },

];

export default services;
