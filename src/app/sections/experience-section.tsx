"use client"

import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { IconHash } from "@tabler/icons-react";
import { Element } from 'react-scroll';

export const ExperienceSection = () => {
    const data: TimelineEntry[] = [
        {
            title: {
                company: "Brana Software Solutions",
                role: "Frontend Developer Intern",
                website: "https://branatech.co",
                location: "Addis Ababa, Ethiopia - Hybrid",
                duration: "Jan 2026 - Present",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        
                        Worked as a Frontend Developer Intern, contributing to the development and maintenance of UI and UX Specifically for Brana Sabisa Project.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li> Contributing to production frontend features using Next.js and modern UI patterns.</li>
                        <li>Collaborating with backend and design teams to implement existing UI designs accurately.</li>
                        <li>Optimized application performance and SEO by leveraging Next.js server-side rendering (SSR) and image optimization techniques.</li>
                        <li>Translated complex Figma prototypes into reusable React components, maintaining strict design system fidelity and cross-browser compatibility.</li>
                        <li>Integrated RESTful APIs and managed global state to ensure seamless data flow and a responsive user experience across the platform.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: {
                company: "Blue Peak Web Solutions",
                role: "Frontend Engineer | Intern",
                location: "Addis Ababa, Ethiopia - Onsite",
                duration: "Oct 2025 - Jan 2026",
            },
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Deliver responsive, high-performance websites and scalable e-commerce solutions.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li> Build internal systems (inventory, booking, dashboards) to streamline operations.</li>
                        <li>Maintain systems with regular updates and security improvements.</li>

                        <li>Introduce new Features for Twascd an Application for the Addis Ababa Water and Sewege Authority</li>
                    </ul>
                </div>
            ),
        },
        {
            title:{
                company: "Sky Scanner",
                role:"Backend Developer",
                website:"https://skyscanner.net",
                location:"United Kingdom - Remote",
                duration:"Sep 2025 - Nov 2025",
            },
            content:(
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                        Developed an interactive travel-date UI, improving user task efficiency by 22%.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Customized UI components and integrated automated testing for reliability.</li>
                        <li>Collaborated with cross-functional teams to enhance user experience and performance.</li>
                    </ul>
                </div>
            )
        },
         {
            title:{
                company: "Abrham Kebere EMC",
                role:"Backend Developer",
                website:"",
                location:"Addis Ababa, Ethiopia - Hybrid",
                duration:"Feb 2025 - Oct 2025",
            },
            content:(
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                       Redesigned the company website, enhancing usability and engagement.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
                        <li>Built AI resume analysis platform, improving hiring efficiency by 55%.</li>
                        <li>Developed a real-time appointment system to reduce scheduling conflicts.</li>
                    </ul>
                </div>
            )
        }
    ];


    return (
        <Element name="experience" className="w-full pt-10">
            <div className="max-w-7xl mx-auto md:py-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-6xl max-w-4xl">
                    Experience
                </h2>
            </div>

            <Timeline data={data} />
        </Element>
    );
}
