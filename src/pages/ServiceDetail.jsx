import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import services from "../data/services";
import { MdCheckCircle, MdArrowBack } from "react-icons/md";

function ServiceDetail() {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const service = services.find((s) => s.id === serviceId);

    // If service not found, show fallback
    if (!service) {
        return (
            <section className="w-full min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Service Not Found
                    </h2>
                    <p className="text-gray-500 mb-6">
                        The service you're looking for doesn't exist.
                    </p>
                    <Button variant="primary" to="/services">
                        Back to Services
                    </Button>
                </div>
            </section>
        );
    }

    const Icon = service.icon;

    // Get related services (exclude current)
    const related = services.filter((s) => s.id !== serviceId).slice(0, 3);

    return (
        <>
            {/* ================= SERVICE DETAIL HERO ================= */}
            <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                    {/* Back Button */}
                    <button
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8 cursor-pointer"
                        onClick={() => navigate("/services")}
                    >
                        <MdArrowBack className="text-lg" />
                        Back to Services
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Icon className="text-3xl text-blue-400" />
                        </div>
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300">
                                Service
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                                {service.title}
                            </h1>
                        </div>
                    </div>
                    <p className="max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* ================= SERVICE DETAILS ================= */}
            <section className="w-full py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <SectionTitle
                                subtitle="What's Included"
                                title="Service Features"
                                align="left"
                            />

                            <div className="space-y-4 -mt-4">
                                {service.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100"
                                    >
                                        <MdCheckCircle className="text-xl text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {feature}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Project Showcase Placeholder */}
                            <div className="mt-12 rounded-2xl overflow-hidden aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-5xl mb-3">🏠</div>
                                    <p className="text-gray-500 font-medium text-sm">
                                        {service.title} — Project Showcase
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            {/* Quick Contact Card */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 text-white mb-6">
                                <h3 className="text-lg font-bold mb-3">
                                    Get a Free Quote
                                </h3>
                                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                                    Interested in our {service.title.toLowerCase()} services? Contact us for a free consultation and estimate.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/50 transition-colors"
                                    />
                                    <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors cursor-pointer">
                                        Request Quote
                                    </button>
                                </div>
                            </div>

                            {/* Related Services */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                                    Related Services
                                </h4>
                                <ul className="space-y-3">
                                    {related.map((s) => {
                                        const RelatedIcon = s.icon;
                                        return (
                                            <li
                                                key={s.id}
                                                className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                                                onClick={() => navigate(`/services/${s.id}`)}
                                            >
                                                <RelatedIcon className="text-lg text-blue-500" />
                                                {s.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceDetail;
