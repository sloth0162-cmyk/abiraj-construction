import React, { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import products, { productCategories } from "../data/products";

function Products() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* ================= PRODUCTS HERO ================= */}
            <section className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-hidden">
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-blue-300">
                        Products
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Premium{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Building Materials
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
                        We source and supply only the finest construction and interior materials from trusted brands — ensuring quality, durability, and style.
                    </p>
                </div>
            </section>

            {/* ================= PRODUCT CATALOG ================= */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto px-6">
                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {productCategories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                                        : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Image placeholder */}
                                <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🧱</div>
                                        <p className="text-gray-400 font-medium text-xs">
                                            {product.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                                        {product.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    {/* Brands */}
                                    <div className="flex flex-wrap gap-2">
                                        {product.brands.map((brand) => (
                                            <span
                                                key={brand}
                                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
                                            >
                                                {brand}
                                            </span>
                                        ))}
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

export default Products;
