import { Section } from "@/components/sections";
import { IconBrandGithub, IconDatabase } from "@tabler/icons-react";
import { ProjectorIcon } from "lucide-react";


export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags?: string[];
    time?: string;
    links: {
        icon: JSX.Element;
        text: string;
        url: string;
    }[];
    details: {
        sections?: Section[];
    };
}

export const projects: Project[] = [


    // Distributed File Server

    {
        id: "1",
        title: "Appointment Management System",
        description: "a full-stack, serverless appointment management system designed to streamline scheduling and customer management for businesses. Built using Next.js, TypeScript, and Appwrite backend services",
        thumbnail: "/appointbit.png",
        tags: ["Next.js", "Tailwind CSS", "Typescript","Zustand","ShadCN UI","Appwrite","Twilio","Sentry"],
        links: [
             {
                icon: <ProjectorIcon />,
                text: "Dataset",
                url: "https://www.appointbit.online/"
            }
        ],
        details: {
            sections: [
                {
                    type: "text",
                    title: "",
                    content: `it features a modern, responsive UI with real-time appointment tracking, SMS notifications via Twilio, and a comprehensive admin dashboard. This project showcases production-ready architecture, reusable UI components, and integrations with third-party services like Sentry for error monitoring.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Streamlined booking process",
                        "Performance monitoring",
                        "Centralized reporting",
                        "Improved communication and accountability"
                    ]
                },
            ]
        }

    },

    // twascd
    {
        id: "2",
        title: "AI-Job Preparation Platform",
        description: "AI-driven platform designed to help users prepare for job interviews and skill-building through interactive voice sessions, AI-generated questions, and personalized learning paths.",
        time: "on going",
        thumbnail: "/prepWise.png",
        tags: ["Next.js", "Firebase", "Google Gemini 2.0", "VAPI", "TypeScript", "Tailwind CSS", "Zustand", "ShadCN UI"],
        links: [ {
                icon: <ProjectorIcon />,
                text: "Dataset",
                url: "https://www.prepwise.site/"
            }],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Leveraging Next.js, Firebase, Google Gemini 2.0, and VAPI, PrepWise enables real-time AI voice interactions, automated feedback, and secure data management. The platform demonstrates advanced full-stack development, AI integration, and real-time streaming workflows.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Interactive voice sessions",
                        "AI-generated questions",
                        "Personalized learning paths",
                        "Real-time feedback and progress tracking"
                    ]
                },
                {
                    type: "carousel",
                    title: "Screens",
                    items: []
                }
            ]
        },
    },

    // Brana ERP
    {
        id: "3",
        title: "Brana ERP",
        description: "An ERP System user for Customer Relation Management,Inventory Management,Human resource Management and Multi Organization Management.",
        thumbnail: "/Brana_Erp.png",
        links: [],
        time: "Jun 2025 - September 2025",
        tags: ["Next.js", "Tailwind CSS", "Typescript","Zustand","ShadCN UI"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Brana ERP is an Enterprise Resource Planning system designed to manage Customer Relation Management, Inventory Management, Human Resource Management, and Multi-Organization Management. The system aims to streamline business processes, improve data accuracy, and enhance organizational efficiency through integrated modules and user-friendly interfaces.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Customer Relation Management",
                        "Inventory Management",
                        "Human Resource Management",
                        "Multi-Organization Management"
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stacks",
                    items: [
                        "**Frontend**: Next.js", "Tailwind CSS", "Typescript","Zustand","ShadCN UI"
                    ],
                },
            ]
        }
    },

    
    {
        id: "4",
        title: "Secure E-Commerce Platform",
        description: "The Secure E-Commerce Platform is a modern, end-to-end online shopping application built with a scalable MERN-style architecture.",
        thumbnail: "/H-Markets.png",
        links: [
            {
                icon: <ProjectorIcon/>,
                text: "Dataset",
                url: "https://www.h-markets.store/"
            }
        ],
        tags: ["Next js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Stripe", "JWT"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `It delivers a fully functional shopping experience with real-time payment processing, secure authentication, and an optimized admin dashboard. The platform provides role-based access control, full product management, and responsive UI across devices, making it ideal for real-world e-commerce environments.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Multi-supermarket integration",
                        "User-friendly browsing and ordering",
                        "Efficient delivery services",
                        "Payment integration with Chapa and Mpesa and Stripe"
                    ]
                }
            ]
        }
    },
    // Zewditu Hospital Management System
    {
        id: "5",
        title: "Zewditu Hospital Management System",
        description: "A comprehensive healthcare administration platform built with the MERN stack to digitize patient records, streamline clinical workflows, and manage hospital resources efficiently.",
        thumbnail: "/zewditu.jpg",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind CSS", "JWT"],
        links: [
            {
                icon: <ProjectorIcon />,
                text: "Live Demo",
                url: "https://hakimethio.org/facility/zewditu-memorial-hospital/" 
            }
        ],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Developed to modernize hospital operations, this system integrates Electronic Health Records (EHR), automated billing, and real-time department coordination. It features role-based access control for Doctors, Nurses, Receptionists, and Admins, ensuring data privacy and operational accountability in a high-traffic medical environment.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Electronic Health Records (EHR) with patient history tracking",
                        "Automated medical billing and pharmacy inventory integration",
                        "Doctor scheduling and ward occupancy management",
                        "Secure diagnostic report generation and lab result tracking"
                    ]
                },
                {
                    type: "bullet",
                    title: "Technical Highlights",
                    items: [
                        "**Backend**: Scalable Node.js/Express API with MongoDB aggregation for reporting",
                        "**Security**: JWT-based authentication and Bcrypt password hashing",
                        "**Frontend**: Responsive dashboard built with React and Redux for state management"
                    ]
                }
            ]
        }
    },

    // // Git hub Streak Notifier
    // {
    //     id: "5",
    //     thumbnail: "/github_streak.png",
    //     title: "GitHub Streak Notifier",
    //     description: "Never lose your GitHub contribution streak again! This automated tool checks your daily GitHub contributions and sends you smart email notifications to keep you motivated and consistent.",
    //     tags: ["Python", "Automation", "Email", "Scheduler"],
    //     links: [
    //         {
    //             icon: <IconBrandGithub />, 
    //             text: "GitHub",
    //             url: "https://github.com/HenokAsaye/github_streak_notifier",
    //         }
    //     ],
    //     details: {
    //         sections: [
    //             {
    //                 type: "text",
    //                 title: "Project Overview",
    //                 content: `GitHub Streak Notifier is a lightweight Python package that helps you maintain your GitHub contribution streak. It monitors your daily GitHub activity and sends motivational or congratulatory email notifications based on your contribution status. The tool is cross-platform, running on Windows, macOS, and Linux, and integrates with system schedulers for automated daily checks. Secure, lightweight, and easy to configure, it's perfect for developers who want to keep their green contribution graph alive!`
    //             },
    //             {
    //                 type: "bullet",
    //                 title: "Key Features",
    //                 items: [
    //                     "Automated daily GitHub contribution checks",
    //                     "Smart email notifications: reminders and celebrations",
    //                     "Customizable notification schedule (24-hour format)",
    //                     "Secure credential storage in your home directory",
    //                     "Cross-platform: Windows Task Scheduler & Unix cron integration",
    //                     "Lightweight with minimal dependencies",
    //                     "Built-in debug logging for troubleshooting"
    //                 ]
    //             },
    //             {
    //                 type: "bullet",
    //                 title: "How It Works",
    //                 items: [
    //                     "Configure with your GitHub token and Gmail app password",
    //                     "Set your preferred notification time",
    //                     "Runs daily via system scheduler to check your streak",
    //                     "Sends motivational or congratulatory emails based on your activity"
    //                 ]
    //             },
    //         ]
    //     }
    // },
    // {
    //     id: "6",
    //     thumbnail: "/Telegram_Ecommerce.png",
    //     title: "Telegram E-commerce Platform",
    //     description: "An end-to-end intelligent data extraction and management platform that scrapes, processes, and extracts structured product information from Telegram channels using advanced NLP and machine learning techniques.",
    //     tags: ["Python", "FastAPI", "MongoDB", "PostgreSQL", "NLP", "PyTorch", "Transformers", "Telethon", "Cloudinary", "JWT", "Docker"],
    //     time: "November 2025 – Present (Ongoing)",
    //     links: [],
    //     details: {
    //         sections: [
    //             {
    //                 type: "text",
    //                 title: "Project Overview",
    //                 content: `Telegram E-commerce is an intelligent platform for extracting and managing e-commerce product data from Telegram channels. It transforms unstructured messages into structured product listings using advanced NLP (XLM-RoBERTa) and a robust data pipeline. The system supports real-time scraping, multilingual entity recognition, secure authentication, and scalable backend APIs, making it ideal for aggregating and cataloging Telegram-based e-commerce data.`
    //             },
    //             {
    //                 type: "bullet",
    //                 title: "Key Features",
    //                 items: [
    //                     "Multi-channel scraping with real-time processing",
    //                     "Multilingual NER for product details",
    //                     "Media handling and cloud storage integration",
    //                     "Secure JWT-based authentication and token management",
    //                     "Scalable RESTful API with clean architecture",
    //                     "Deduplication and error handling for production readiness"
    //                 ]
    //             },
    //             {
    //                 type: "bullet",
    //                 title: "Tech Stack",
    //                 items: [
    //                     "Flutter (Frontend)",
    //                     "Python (FastAPI, Uvicorn)",
    //                     "PostgreSQL, MongoDB (Database)",
    //                     "Transformers, PyTorch, Hugging Face (NLP/ML)",
    //                     "Telethon (Telegram API client)",
    //                     "Cloudinary (CDN)",
    //                     "JWT (python-jose), passlib (Authentication)",
    //                     "Docker (Containerization)"
    //                 ]
    //             }
    //         ]
    //     }
    // },
    // {
    //     id: "7",
    //     thumbnail: "/ai_humanizer_thumbnail.png",
    //     title: "AI humanizer",
    //     description: "A web app that converts ai generated text into human like text, to avoid ai detection.",
    //     tags: ["React", "React Query", "NodeJS", "Express", "MongoDB"],
    //     links: [],
    //     details: { sections: [] }
    // },

    // {
    //     id: "8",
    //     title: "Hacks Datavis",
    //     description: "A visualization site for A2SV 2024 Hackathon data, syncing Google Sheets with db using AppScript.",
    //     thumbnail: "/infoblender_thumbnail.png",
    //     links: [
    //         {
    //             icon: <IconBrandGithub />,
    //             text: "Source Code",
    //             url: "https://github.com/NathanZlion/hacks-datavis/"
    //         },
    //         {
    //             icon: <IconExternalLink />,
    //             text: "Site",
    //             url: "https://hacks-datavis.vercel.app/"
    //         }
    //     ],
    //     tags: ["Google AppScript", "React", "CronJob"],
    //     details: { sections: [] }
    // }
]