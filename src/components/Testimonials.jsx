import React from "react";
import SectionTitle from "./ui/SectionTitle";
import testimonials from "../data/testimonials";
import { MdStar, MdStarHalf, MdStarOutline, MdFormatQuote } from "react-icons/md";

function StarRating({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<MdStar key={i} className="text-amber-400 text-lg" />);
        } else if (i - 0.5 <= rating) {
            stars.push(<MdStarHalf key={i} className="text-amber-400 text-lg" />);
        } else {
            stars.push(<MdStarOutline key={i} className="text-amber-400 text-lg" />);
        }
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
}

function Testimonials() {
    // Show first 3 on home page
    const featured = testimonials.slice(0, 3);

    return (
        <>
            {/* ================= TESTIMONIALS ================= */}
            <section className="w-full py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                    <SectionTitle
                        subtitle="Testimonials"
                        title="What Our Clients Say"
                        description="Hear from homeowners and businesses who trusted us with their dream spaces."
                        light={true}
                    />

                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300"
                            >
                                {/* Quote Icon */}
                                <MdFormatQuote className="text-3xl text-blue-400/30 mb-3 rotate-180" />

                                {/* Rating */}
                                <StarRating rating={testimonial.rating} />

                                {/* Text */}
                                <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {testimonial.location} • {testimonial.project}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
