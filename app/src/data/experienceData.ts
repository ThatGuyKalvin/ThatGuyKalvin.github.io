import type { Experience } from '../models/Experience';

export const experienceList: Experience[] = [
  {
    id: 1,
    company: 'IC Markets',
    role: 'Software Engineer',
    description: 'I am currently working as a Software Engineer implementing new features for client and internal facing web applications, as well as integrating external solutions into a finance platform.',
    projects: [
      "Integrating Australian Securities Exchange (ASX)",
      "SwiftID - API (.NET 6) used to integrate a Know Your Customer (KYC) solution with our existing platform",
      "Fiat payment systems for deposit and withdrawal (T-SQL, .NET Framework and JavaScript)",
      "Cryptocurrency payment systems for deposit and withdrawal (T-SQL, .NET Framework and JavaScript)",
      "In app and exportable transaction reports (T-SQL, .NET Framework 4.5 and JavaScript)",
      "Continuous integration / continuous deployment using Bamboo and Octopus (build, test, publish and deploy)",
      "Upgrading microservices from .NET Framework 4.5 to .NET 6"
    ],
    date: 'February 2023 - Present',
    website: 'https://icmarkets.com.au',
    city: 'Sydney',
    technologies: [
      ".NET",
      "JavaScript",
      "T-SQL",
      "AWS",
      "SQS"
    ]
  },
  {
    id: 2,
    company: 'NantHealth',
    role: 'Software Engineer',
    description: 'As a Full Stack Software Engineer my role was to build a new suite of Azure native web applications for the US healthcare market.',
    projects: [
      "Information Exchange - API (.NET 6) and frontend (Vite) used by healthcare partners to retrieve patient data",
      "Document Exchange - API (.NET Framework 4.7) and frontend (Razor and Vue 2) used by clinical and insurance staff to view, create, edit and transfer documents",
      "Portal microservice (header, footer, and menu) using Vite",
      "Event based logging system (.NET 6) following FHIR industry standard",
      "Okta log retention system (.NET 6)",
      "API Manager and IdentityServer4 patching",
      "Unit, functional, and integration tests (C#, TypeScript and Robot Framework)",
      "Secure and compliant azure terraform modules for function apps, web apps, networking, etc.",
      "Continuous integration / continuous deployment using Azure Pipelines (infrastructure, build, test, publish and deploy)"
    ],
    website: 'https://nanthealth.com',
    date: 'September 2022 - January 2023',
    city: 'Belfast',
    technologies: [
      "Vue",
      "Vite",
      ".NET",
      "T-SQL",
      "TypeScript",
      "JavaScript",
      "Selenium",
      "Azure",
      "IS4",
      "Event Hub"
    ]
  },
  {
    id: 3,
    company: 'NantHealth',
    role: 'Graduate Software Engineer',
    description: 'As a Graduate Full Stack Software Engineer my role was to build a new suite of Azure native web applications for the US healthcare market.',
    projects: [
      "Information Exchange - API (.NET 6) and frontend (Vite) used by healthcare partners to retrieve patient data",
      "Document Exchange - API (.NET Framework 4.7) and frontend (Razor and Vue 2) used by clinical and insurance staff to view, create, edit and transfer documents",
      "Portal microservice (header, footer, and menu) using Vite",
      "Event based logging system (.NET 6) following FHIR industry standard",
      "Okta log retention system (.NET 6)",
      "API Manager and IdentityServer4 patching",
      "Unit, functional, and integration tests (C#, TypeScript and Robot Framework)",
      "Secure azure terraform modules for function apps, web apps, networking, etc.",
      "Continuous integration / continuous deployment using Azure Pipelines (infrastructure, build, test, publish and deploy)"
    ],
    website: 'https://nanthealth.com',
    date: 'June 2021 - September 2022',
    city: 'Belfast',
    technologies: [
      "Vue",
      "Vite",
      ".NET",
      "T-SQL",
      "TypeScript",
      "JavaScript",
      "Selenium",
      "Azure",
      "IS4",
      "EventHub"
    ]
  },
  {
    id: 4,
    company: 'NantHealth',
    role: 'Associate Software Engineer',
    description: 'As an Associate Stack Software Engineer my role was to implement new features for an existing healthcare platform.',
    projects: [
      "Document Exchange - API (.NET Framework 4.7) and frontend (Razor and Vue 2) used by clinical and insurance staff to view, create, edit and transfer documents",
      "Alerting - API (.NET Core 3.1) and frontend (Razor) used by clinical staff to set up scheduled e-mail alerts for documents with pending actions",
      "Sealed secrets for sensitive configuration for Kubernetes applications",
      "Helm and helmsman support for Kubernetes applications",
      "Unit, functional, and integration tests (C#, TypeScript and Robot Framework)",
      "Continuous integration / continuous deployment using TeamCity (build, test, publish and deploy)"
    ],
    website: 'https://nanthealth.com',
    date: 'June 2019 - July 2020',
    city: 'Belfast',
    technologies: [
      "Vue",
      ".NET",
      "T-SQL",
      "JavaScript",
      "Selenium",
      "Kubernetes",
      "Helm",
      "ActiveMQ"
    ]
  },
  {
    id: 5,
    company: 'San Andreas Roleplay',
    role: 'Developer',
    description: 'This was a voluntary role working for a large Grand Theft Auto: San Andreas Multiplayer roleplay gaming community.',
    projects: [
      "Rewriting player data to use MySQL instead of .ini files",
      "Anticheat",
      "Housing for players to buy/sell with in game currency",
      "Cars for players to buy/sell with in game currency",
      "Factions with special abilities, such as police",
      "Side missions",
      "Team deathmatch and capture the flag events",
      "Custom mapping for donators"
    ],
    website: 'https://gta-sarp.com',
    date: 'June 2014 - June 2017',
    city: 'Belfast',
    technologies: [
      "PAWN",
      "MySQL"
    ]
  },
];