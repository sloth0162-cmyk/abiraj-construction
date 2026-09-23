import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import projects from "../data/projects";

function ProjectHighlights() {
    const navigate = useNavigate();
    // Show first 4 projects on the home page
    const featured = projects.slice(0, 4);

    return (
        <>
            {/* ================= PROJECT HIGHLIGHTS ================= */}
            <section className="w-full py-20 bg-white">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <SectionTitle
                        subtitle="Our Work"
                        title="Recent Project Highlights"
                        description="Browse through our latest completed projects — each one crafted with precision, passion, and premium materials."
                    />

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {featured.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
                                onClick={() => navigate("/portfolio")}
                            >
                                {/* Placeholder visual */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">🏠</div>
                                        <p className="text-gray-500 font-medium text-xs">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                                    <div>
                                        <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                                            {project.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-300 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-12">
                        <Button variant="outline" to="/portfolio">
                            View Full Portfolio
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHighlights;
