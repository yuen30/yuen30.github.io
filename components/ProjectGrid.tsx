"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Loader2 } from "lucide-react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    updated_at: string;
}

const GITHUB_USERS = ["yuen30", "abe27"];

export const ProjectGrid = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const responses = await Promise.all(
                    GITHUB_USERS.map((user) =>
                        fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
                    )
                );

                const data = await Promise.all(responses.map((res) => res.json()));

                // Flatten, remove forks, and sort by stars / date
                const allRepos = data
                    .flat()
                    .filter((repo: any) => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count ||
                        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .slice(0, 8);

                setProjects(allRepos);
            } catch (error) {
                console.error("Error fetching GitHub repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Open Source <span className="text-indigo-400">Projects</span>
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto">
                    A collection of my latest repositories and contributions across various technologies.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="animate-spin text-indigo-500" size={40} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                url={project.html_url}
                                language={project.language}
                                stars={project.stargazers_count}
                            />
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};
