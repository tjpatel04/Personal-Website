'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Software Engineer Intern - Telemetrix (June 2025-August 2025)',
        description: 'Created and developed features for RPM patient data in a healthcare startup',
        image: '/computing.png',
        links: [
            { href: '#', label: 'Python' },
			{ href: '#', label: 'Azure DevOps' },
            { href: '#', label: 'HTML/CSS' },
			{ href: '#', label: 'FastAPI' },
        ],
    },
    {
        id: 2,
        title: 'Software Engineer- Mok Sports Inc. (April 2025-Present)',
        description: 'Developing the backend for a fantasy football app featuring REST API and a SQL Database hosted on AWS',
        image: '/mok.png',
        links: [
            { href: '#', label: 'C#' },
            { href: '#', label: 'REST API' },
			{ href: '#', label: 'SQL' },
			{ href: '#', label: 'Azure Data Studio' },
        ],
    },
    {
        id: 3,
        title: 'Flying Bees- Project',
        description: 'Interactive flying bee game featuring dynamic animations and a Object-Oriented Programming framework',
        image: '/code.jpg',
        links: [
            { href: 'https://github.com/tjpatel04/Flying-Bees', label: 'Project Link' },
        ],
    },
    {
        id: 4,
        title: 'SonarCloud Warnings- Project',
        description: 'Refactored JavaScript code in a NodeBB codebase reducing cognitive complexity to improve code reliability while also implementing unit testing',
        image: '/laptop.jpg',
        links: [
            { href: '#', label: 'JavaScript' },
            { href: '#', label: 'CI/CD'},
        ],
    },
];

export default function ProjectsSection() {
    return (
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            >
                Relevant Experience & Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: project.id * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex gap-4">
                                {project.links.map((link, index) => (
                                    <Link
                                        key={index}
										href={link.href}
                                        className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
