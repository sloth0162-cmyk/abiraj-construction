import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { footerQuickLinks, contactInfo, socialLinks } from "../constants/navigation";
import AK from "../assets/images/AK.png";

function Footer() {
    const navigate = useNavigate();

    const socialIcons = {
        Facebook: IoLogoFacebook,
        Instagram: IoLogoInstagram,
        YouTube: IoLogoYoutube,
        WhatsApp: IoLogoWhatsapp,
    };

    return (
        <>
            {/* ================= FOOTER ================= */}
            <footer className="bg-gray-950 text-gray-300">
                {/* Top Section */}
                <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div>
                        <img
                            src={AK}
                            alt="Abhiraj Construction Logo"
                            className="w-36 object-contain mb-4 brightness-0 invert"
                        />
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">
                            Transforming spaces into stunning realities. Premium construction and interior design solutions for homes, offices, and commercial projects.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => {
                                const Icon = socialIcons[link.label];
                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    >
                                        {Icon && <Icon className="text-lg" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerQuickLinks.map((link) => (
                                <li
                                    key={link.path}
                                    className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200"
                                    onClick={() => navigate(link.path)}
                                >
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Interior Design",
                                "Modular Kitchen",
                                "Bathroom Renovation",
                                "Tile Installation",
                                "False Ceiling",
                                "Turnkey Interiors",
                            ].map((service) => (
                                <li
                                    key={service}
                                    className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200"
                                    onClick={() =>
                                        navigate(
                                            `/services/${service
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`
                                        )
                                    }
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MdPhone className="text-blue-400 text-lg mt-0.5 shrink-0" />
                                {contactInfo.phone}
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MdEmail className="text-blue-400 text-lg mt-0.5 shrink-0" />
                                {contactInfo.email}
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MdLocationOn className="text-blue-400 text-lg mt-0.5 shrink-0" />
                                {contactInfo.address}
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MdAccessTime className="text-blue-400 text-lg mt-0.5 shrink-0" />
                                {contactInfo.workingHours}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="w-full max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Abhiraj Construction. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-500">
                            Designed & Built with ❤️
                        </p>
                    </div>
                </div>
            </footer>

            {/* Mobile bottom bar spacer — prevents footer content being hidden behind fixed nav */}
            <div className="md:hidden h-16" />
        </>
    );
}

export default Footer;
