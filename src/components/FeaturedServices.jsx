import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import services from "../data/services";

function FeaturedServices() {
    const navigate = useNavigate();
    // Show first 6 services on the home page
    const featured = services.slice(0, 6);

    return (
        <>
            {/* ================= FEATURED SERVICES ================= */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <SectionTitle
                        subtitle="What We Do"
                        title="Our Premium Services"
                        description="From concept to completion, we offer a full spectrum of construction and interior design services to transform your spaces."
                    />

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((service) => {
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

                                    {/* Arrow link */}
                                    <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Learn More →
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-12">
                        <Button variant="outline" to="/services">
                            View All Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedServices;
