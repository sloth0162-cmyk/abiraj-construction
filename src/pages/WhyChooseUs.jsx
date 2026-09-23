import React from "react";
import Button from "../components/ui/Button";
import { MdConstruction } from "react-icons/md";

function WhyChooseUs() {
    return (
        <>
            {/* ================= WHY CHOOSE US PLACEHOLDER ================= */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
                    <MdConstruction className="text-6xl text-blue-400/40 mx-auto mb-8" />
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-blue-300">
                        Coming Soon
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Abhiraj Construction
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
                        We're building something special for this page. In the meantime, explore our services and portfolio to see why 500+ homeowners trust us with their dream spaces.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="primary" to="/services">
                            Explore Services
                        </Button>
                        <Button variant="secondary" to="/portfolio">
                            View Portfolio
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChooseUs;
