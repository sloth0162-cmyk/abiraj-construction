import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, variant = "primary", to, onClick, className = "", ...props }) {
    const navigate = useNavigate();

    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
            "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0",
        outline:
            "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0",
        dark:
            "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
    };

    const handleClick = () => {
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
