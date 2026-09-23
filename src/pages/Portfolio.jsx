import React, { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import projects, { projectFilters } from "../data/projects";

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.filter === activeFilter);

    return (
        <>
            {/* ================= PORTFOLIO HERO ================= */}
            <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute top-10 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-blue-300">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Completed Projects
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
                        Browse our portfolio of completed projects — each one a testament to quality craftsmanship and thoughtful design.
                    </p>
                </div>
            </section>

            {/* ================= FILTER & GALLERY ================= */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto px-6">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {projectFilters.map((filter) => (
                            <button
                                key={filter.value}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                    activeFilter === filter.value
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                                }`}
                                onClick={() => setActiveFilter(filter.value)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 cursor-pointer"
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

                                {/* Hover Overlay */}
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

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Portfolio;
