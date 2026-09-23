import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import services from "../data/services";

function Services() {
    const navigate = useNavigate();

    return (
        <>
            {/* ================= SERVICES HERO ================= */}
            <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-blue-300">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        What We{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Offer
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
                        From tile installation to complete turnkey interiors — explore our full range of premium construction and design services.
                    </p>
                </div>
            </section>

            {/* ================= ALL SERVICES GRID ================= */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    onClick={() => navigate(`/services/${service.id}`)}
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-5 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                                        <Icon className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {service.shortDescription}
                                    </p>

                                    {/* Features preview */}
                                    <ul className="space-y-2 mb-4">
                                        {service.features.slice(0, 3).map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-xs text-gray-600"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Arrow link */}
                                    <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                                        View Details →
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
