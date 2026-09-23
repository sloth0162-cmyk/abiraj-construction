import React from "react";

function SectionTitle({ subtitle, title, description, align = "center", light = false }) {
    const alignClass = align === "center" ? "text-center" : "text-left";

    return (
        <div className={`${alignClass} mb-12`}>
            {subtitle && (
                <span
                    className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
                        light ? "text-blue-300" : "text-blue-600"
                    }`}
                >
                    {subtitle}
                </span>
            )}
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 ${
                    light ? "text-white" : "text-gray-900"
                }`}
            >
                {title}
            </h2>
            {/* Accent underline */}
            <div
                className={`w-16 h-1 rounded-full ${align === "center" ? "mx-auto" : ""} ${
                    light ? "bg-blue-400" : "bg-gradient-to-r from-blue-600 to-indigo-600"
                } mb-4`}
            />
            {description && (
                <p
                    className={`max-w-2xl text-base md:text-lg leading-relaxed ${
                        align === "center" ? "mx-auto" : ""
                    } ${light ? "text-gray-300" : "text-gray-500"}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;
