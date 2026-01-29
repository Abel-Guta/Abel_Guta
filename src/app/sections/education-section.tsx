"use client"

import { Element } from "react-scroll";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type education = {
    level: string;
    school: string;
    time: string;
    achievements?: string[];
    ongoing?: boolean;
}

export const EducationSection = () => {
    // const [isExpanded, setIsExpanded] = useState(false);

    const education: education[] = [
        {
            level: "BSc Degree",
            school: "Addis Ababa University, Addis Ababa Institute of Technology",
            time: "",
            achievements: ["BSc in Software Engineering, in AI Stream."],
            ongoing: true,
        },
       
    ];

    return (
        <Element name="education" className="w-full pt-10">
            <section className="w-full">
                <div className="max-w-7xl mx-auto py-0 px-4 md:px-8 lg:px-10">

                    <div className="max-w-7xl mx-auto md:py-20 px-4 md:px-8 lg:px-10">
                        <h2 className="text-2xl md:text-6xl max-w-4xl">
                            Education
                        </h2>
                    </div>

                    {EducationList(
                        education.filter(edu => edu.ongoing),
                        "border-l-8 border-green-300 pl-7 mt-6"
                    )}

                    {/* Collapsible Section */}
                    {/* Collapsible Section removed due to unused state */}

                    {/* Toggle Button removed due to unused state */}
                </div>
            </section>
        </Element>
    );
};


const EducationList = (education: education[], className?: string) => {
    return education.map((edu, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={cn("border-l-4 border-gray-300 pl-4", className)}
        >
            <h3 className="text-xl font-semibold">{edu.level}</h3>
            <p className="">{edu.school}</p>
            <p className="text-muted-foreground text-sm">{edu.time}</p>
            {edu.achievements && (
                <ul className="list-disc list-inside mt-2 text-gray-500">
                    {edu.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                    ))}
                </ul>
            )}
        </motion.div>
    ))
}