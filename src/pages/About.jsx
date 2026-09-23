import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import { MdVerified, MdGroups, MdEmojiEvents, MdHandshake, MdTrendingUp, MdStar } from "react-icons/md";

function About() {
    const values = [
        {
            icon: MdVerified,
            title: "Quality First",
            description: "We use only premium-grade materials and employ skilled craftsmen to ensure every project meets the highest standards.",
        },
        {
            icon: MdHandshake,
            title: "Transparency",
            description: "No hidden costs, no surprises. We maintain complete transparency in pricing, timelines, and communication.",
        },
        {
            icon: MdTrendingUp,
            title: "Innovation",
            description: "We stay ahead of design trends, adopting the latest techniques and materials to deliver modern, future-proof interiors.",
        },
        {
            icon: MdStar,
            title: "Client Centric",
            description: "Your vision is our blueprint. Every decision we make is driven by your preferences, lifestyle, and budget.",
        },
    ];

    const milestones = [
        { value: "2012", label: "Founded" },
        { value: "500+", label: "Projects Completed" },
        { value: "50+", label: "Expert Craftsmen" },
        { value: "98%", label: "Client Satisfaction" },
    ];

    const teamMembers = [
        { name: "Abhishek Rajput", role: "Founder & CEO", initial: "A" },
        { name: "Ravi Kumar", role: "Lead Architect", initial: "R" },
        { name: "Meena Sharma", role: "Interior Designer", initial: "M" },
        { name: "Karan Patel", role: "Project Manager", initial: "K" },
    ];

    return (
        <>
            {/* ================= ABOUT HERO ================= */}
            <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-blue-300">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Building Trust,{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Crafting Excellence
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
                        For over a decade, Abhiraj Construction has been transforming homes and commercial spaces across Gujarat with uncompromising quality and innovative design.
                    </p>
                </div>
            </section>

            {/* ================= COMPANY STORY ================= */}
            <section className="w-full py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* Image Placeholder */}
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🏢</div>
                                    <p className="text-gray-500 font-medium text-sm">
                                        Company Headquarters
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Story Text */}
                        <div>
                            <SectionTitle
                                subtitle="Our Story"
                                title="From a Vision to a Legacy"
                                align="left"
                            />
                            <p className="text-gray-500 leading-relaxed mb-6 -mt-6">
                                Founded in 2012, Abhiraj Construction started as a small tile installation business with a simple mission — deliver exceptional quality at honest prices. Over the years, our dedication to craftsmanship and client satisfaction helped us grow into a full-service construction and interior design company.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Today, with 500+ successfully completed projects across Gujarat, we offer end-to-end solutions — from modular kitchens and bathroom renovations to complete turnkey home interiors. Our team of 50+ skilled craftsmen, architects, and designers work together to turn your vision into reality.
                            </p>
                            <Button variant="primary" to="/services">
                                Explore Our Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MILESTONES ================= */}
            <section className="w-full py-16 bg-gray-50">
                <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {milestones.map((m) => (
                        <div
                            key={m.label}
                            className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">
                                {m.value}
                            </div>
                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                {m.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= MISSION & VALUES ================= */}
            <section className="w-full py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <SectionTitle
                        subtitle="Our Mission"
                        title="Values That Drive Us"
                        description="Every project we undertake is guided by our core values — ensuring quality, trust, and innovation in everything we do."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-5 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                                        <Icon className="text-2xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= TEAM ================= */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <SectionTitle
                        subtitle="Meet The Team"
                        title="The People Behind The Craft"
                        description="Our talented team of architects, designers, and project managers work together to deliver excellence on every project."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                                    {member.initial}
                                </div>
                                <h4 className="text-sm font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h4>
                                <p className="text-xs text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CERTIFICATIONS CTA ================= */}
            <section className="w-full py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                    <MdEmojiEvents className="text-5xl text-white/30 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Certified & Award-Winning
                    </h2>
                    <p className="text-base text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
                        We are a licensed construction firm recognized for our commitment to quality, safety, and timely delivery. Our work has been featured across multiple home design publications.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="secondary" to="/portfolio">
                            See Our Work
                        </Button>
                        <Button variant="secondary" to="/services">
                            Our Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
