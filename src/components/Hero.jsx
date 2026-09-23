import React from "react";
import Button from "./ui/Button";
import Herobg from "../assets/images/Herobg.png";
import Herobg2 from "../assets/images/Herobg2.png";

function Hero() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section
                className="relative w-full min-h-screen sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20
                transition-transform duration-[12000ms] ease-in-out hover:scale-105
                "
                style={{ backgroundImage: `url(${Herobg2})` }}
            >
                {/* Overlay: Slightly darker on mobile for better text contrast */}
                <div
                    className="
    absolute inset-0 z-0
    bg-gradient-to-r
    from-gray-950/90
    via-gray-950/50
    to-blue-950/20
    bg-[length:200%_200%]
    animate-gradient
  "
                />

                {/* Decorative pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5 z-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "30px 30px",
                    }}
                />

                {/* Floating decorative elements (Scaled down / hidden on smaller screens to prevent overflow issues) */}
                <div className="absolute top-10 left-5 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-5 w-60 h-60 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                        <span className="text-[10px] sm:text-xs font-semibold text-white/90 tracking-wide uppercase">
                            Trusted by 500+ Homeowners
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] sm:leading-tight mb-4 sm:mb-6 tracking-tight max-w-4xl">
                        Build Your Dream
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Home & Interiors
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10 px-2">
                        Premium construction and interior design services that transform your spaces into stunning realities. From concept to completion — we build excellence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                        <Button variant="primary" to="/services" className="w-full sm:w-auto text-center">
                            Explore Our Services
                        </Button>
                        <Button variant="secondary" to="/portfolio" className="w-full sm:w-auto text-center">
                            View Our Work
                        </Button>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-xs sm:max-w-xl lg:max-w-3xl mx-auto">
                        {[
                            { value: "12+", label: "Years Experience" },
                            { value: "500+", label: "Projects Completed" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "50+", label: "Expert Craftsmen" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Hero;