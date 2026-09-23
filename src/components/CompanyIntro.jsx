import React from "react";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import CompanyIntroImg from "../assets/images/CompanyIntroImg.png";

function CompanyIntro() {
    return (
        <>
            {/* ================= COMPANY INTRODUCTION ================= */}
            <section className="w-full py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                         
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100">
                                    <div className="text-center">
                                            <img src={CompanyIntroImg} alt="company intro"
                                            className ="w-full h-auto rounded-lg shadow-lg image-container"/>
                                    </div>
                            </div>

                          
                        </div>

                        {/* Right: Text Content */}
                        <div>
                            <SectionTitle
                                subtitle="Who We Are"
                                title="Building, Renovating & Finishing Homes"
                                align="left"
                            />
                            <p className="text-gray-500 leading-relaxed mb-6 -mt-6">
                                Abhiraj Construction provides construction, renovation, marble, tile, flooring, and interior finishing services. From major construction and renovation work to the final finishing details, we help turn your ideas into a complete and well-finished space.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                We focus on quality workmanship, reliable materials, and careful attention to detail to deliver work that is built to last and looks right.
                            </p>

                            {/* Key points */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    "Quality Workmanship",
                                    "Reliable Materials",
                                    "Construction & Renovation",
                                    "Complete Finishing Solutions",
                                ].map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                        {point}
                                    </div>
                                ))}
                            </div>

                            <Button variant="outline" to="/about">
                                Learn More About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CompanyIntro;
