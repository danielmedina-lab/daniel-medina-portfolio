import { cvRoutes } from "@/lib/constants";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

type SectionBody = string | readonly string[];

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  sector: string;
  summary: string;
  proof: readonly string[];
  tags: readonly string[];
  publicSafeNote: string;
  sections: readonly { title: string; body: SectionBody }[];
};

const sharedCareer = ["Transcom", "Uniglobal", "Konecta", "Ayesa", "TransformIA"] as const;

export const portfolioContent = {
  es: {
    metadata: {
      title: "Daniel Medina Sánchez | Project Manager · Technology Delivery · Applied AI",
      description:
        "Project Manager con 15+ años de liderazgo, 560+ personas, 4 países y P&L >12M€. Ayesa, sector público, ITSM, Digital Workplace y portfolio técnico de IA aplicada.",
      openGraphLocale: "es_ES"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "Project Manager · Technology · Applied AI",
      homeAria: "Inicio de Daniel Medina Sánchez",
      links: [
        { href: "/#work", label: "Perfil" },
        { href: "/#experience", label: "Experiencia" },
        { href: "/#lab", label: "TransformIA" },
        { href: "/#cv", label: "CV" },
        { href: "/#contact", label: "Contacto" }
      ],
      bookInterview: "Solicitar entrevista",
      cv: "CV"
    },
    footer: {
      body:
        "Project Manager con experiencia ejecutiva en operaciones y delivery, trayectoria en consultoría tecnológica y profundidad técnica demostrable en IA aplicada. Casos redactados sin datos confidenciales ni documentación interna.",
      links: { privacy: "Privacidad", assets: "Activos", designSystem: "Sistema visual", github: "GitHub" }
    },
    hero: {
      badge: "PROJECT MANAGER · TECHNOLOGY DELIVERY · APPLIED AI",
      name: "Daniel Medina Sánchez",
      headline:
        "Dirijo proyectos complejos donde negocio, personas y tecnología tienen que funcionar a la vez.",
      body:
        "Actualmente soy Project Manager en ICEX dentro de Ayesa, después de trabajar en iniciativas para Madrid Digital, Justicia y UOC. Aporto más de 15 años de experiencia gestionando equipos, clientes, operaciones y resultados, con responsabilidad sobre organizaciones de 560+ personas, cuatro países y P&L superior a 12 M€/año.\n\nA esa base de gestión sumo una profundidad tecnológica poco habitual en un perfil de Project Management: Digital Workplace, ITSM, Microsoft 365, Jira/JSM, Salesforce, Azure, datos, programación e IA aplicada. Mi trabajo está en conectar estrategia, delivery y ejecución hasta que las cosas funcionan.",
      downloadCv: "Descargar CV",
      viewAyesa: "Ver evolución en Ayesa",
      contact: "Solicitar entrevista",
      credentialsLabel: "TRAYECTORIA",
      credentials: sharedCareer,
      primaryCvHref: cvRoutes.es,
      profile: {
        label: "Perfil actual",
        name: "Daniel Medina",
        role: "Project Manager · Technology Delivery · Applied AI",
        chips: ["Project Management", "Technology Delivery", "Applied AI"]
      },
      stats: [
        { value: "15+", label: "años" },
        { value: "560+", label: "personas" },
        { value: "4", label: "países" },
        { value: "€12M+", label: "P&L" },
        { value: "Project Manager", label: "ICEX / Ayesa · actualidad" }
      ]
    },
    valueAreas: {
      eyebrow: "PROJECT MANAGEMENT",
      title: "Gestión, delivery y tecnología en un mismo perfil",
      body:
        "Gestiono proyectos con una visión completa del problema: objetivos, personas, recursos, riesgos, stakeholders, tecnología y resultado de negocio. Mi experiencia previa en operaciones de gran escala me aporta disciplina de ejecución; mi recorrido tecnológico me permite entender con profundidad qué estamos construyendo y trabajar de tú a tú con equipos técnicos.",
      items: [
        {
          title: "DELIVERY",
          body: "Planificación · hitos · recursos · dependencias · riesgos · contingencias · seguimiento · entregables",
          tags: ["Planificación", "Dependencias", "Riesgos", "Entregables"]
        },
        {
          title: "GOVERNANCE & STAKEHOLDERS",
          body: "Presupuesto · prioridades · reporting ejecutivo · cliente · negociación · toma de decisiones",
          tags: ["Presupuesto", "Stakeholders", "Reporting", "Decisiones"]
        },
        {
          title: "TECHNOLOGY",
          body: "Digital Workplace · ITSM · Microsoft 365 · Jira/JSM · Salesforce · Azure · datos · automatización · IA aplicada",
          tags: ["Microsoft 365", "Salesforce", "Azure", "IA aplicada"]
        }
      ]
    },
    proof: {
      eyebrow: "EXPERIENCIA",
      title: "Project Management con base ejecutiva y tecnológica",
      body:
        "Actualmente lidero proyectos tecnológicos con una experiencia acumulada que abarca operaciones, Service Delivery, Business Management, consultoría y transformación.",
      careerLabel: "Experiencia acumulada",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operaciones · coordinación" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · escala ejecutiva" },
        { period: "2025–actualidad", title: "Ayesa", detail: "Technology Consulting → Project Management" }
      ],
      ayesa: {
        eyebrow: "AYESA · PROJECT MANAGEMENT & TECHNOLOGY CONSULTING",
        title: "Project Management en ICEX y experiencia tecnológica en sector público",
        period: "ago. 2025 · actualidad",
        items: [
          {
            period: "2025",
            client: "Madrid Digital",
            role: "Consultor estratégico de IA y Digital Workplace",
            detail: "Estrategia · roadmaps · modernización · documentación ejecutiva"
          },
          {
            period: "2025",
            client: "Justicia",
            role: "Consultor estratégico de IA",
            detail: "Análisis funcional · transformación de procesos · Administración Pública"
          },
          {
            period: "2025",
            client: "UOC",
            role: "Consultor estratégico de IA",
            detail: "Casos de uso · knowledge/CRM · Salesforce · análisis funcional"
          },
          {
            period: "2026 → ACTUALIDAD",
            client: "ICEX",
            role: "PROJECT MANAGER",
            detail:
              "30+ personas · planificación · seguimiento · entregables · contingencias · stakeholders · Jira/JSM · Microsoft 365 · Power BI"
          }
        ],
        supporting:
          "Actualmente gestiono proyectos en ICEX dentro de Ayesa, con responsabilidad sobre planificación, seguimiento, entregables, contingencias, stakeholders, reporting y coordinación de equipos. Mi recorrido previo por Madrid Digital, Justicia y UOC amplió esa experiencia hacia transformación, Digital Workplace, sector público e IA aplicada.",
        cta: "Ver caso Ayesa",
        slug: "ayesa-digital-workplace-sector-publico-icex"
      }
    },
    konecta: {
      eyebrow: "KONECTA · ESCALA EJECUTIVA",
      title: "Escala ejecutiva que hoy aplico al Project Management",
      body:
        "En Konecta dirigí un ámbito de 560+ personas en cuatro países y P&L superior a 12 M€/año, gobernando capacidad, SLA/KPI, calidad, facturación, margen, desviaciones, continuidad y relación ejecutiva con cliente. Esa experiencia forma parte directa de cómo gestiono hoy recursos, riesgos, stakeholders y múltiples workstreams.",
      metrics: [
        { value: "560+", label: "personas" },
        { value: "4", label: "países" },
        { value: ">12M€", label: "P&L anual" },
        { value: "8", label: "líneas de servicio" }
      ],
      details: [
        "SLA/KPI, capacidad y calidad",
        "Facturación, margen y desviaciones",
        "Continuidad, escalaciones y planes correctivos",
        "Relación ejecutiva con cliente estratégico"
      ],
      cta: "Ver caso Konecta",
      slug: "konecta-operaciones-escala-seguros"
    },
    lab: {
      eyebrow: "TECNOLOGÍA EN PARALELO · PROOF OF WORK",
      title: "TransformIA: no estudio la IA desde fuera. La construyo.",
      body:
        "TransformIA es mi espacio de construcción tecnológica. Diseño productos y sistemas de IA aplicada para trabajar de primera mano con agentes, runtimes, recuperación semántica, gobierno, evidencia, interfaces y Azure.\n\nNo lo utilizo para demostrar que sé usar herramientas de IA. Lo utilizo para comprender cómo se diseñan, integran, gobiernan y convierten en producto.",
      projectsTitle: "Sistemas construidos · estado delimitado por evidencia",
      projects: [
        {
          title: "Exocortex Runtime",
          status: "Baseline implementada en repositorio",
          body:
            "Runtime agéntico gobernado para trabajo trazable: Work Units, registro de herramientas, motor de políticas, evidencia y aprobación humana. MCP funciona como frontera gobernada, no como permiso para actuar.",
          tags: ["Agents", "Policy", "Evidence", "Human-in-the-Loop", "MCP"],
          href: "https://github.com/TransformIA-AI/transformia-exocortex-runtime"
        },
        {
          title: "Astrolabio Metamente",
          status: "Implementación privada · no producción",
          body:
            "Plano cognitivo y de autoridad para contexto gobernado y recuperación semántica. Incluye contratos, ledger local, Lens y transporte MCP de solo lectura; no sustituye la autoridad del Runtime.",
          tags: ["Authority", "Semantic recovery", "Context", "Read-only MCP"],
          href: "https://github.com/TransformIA-AI/transformia-astrolabio-metamente"
        },
        {
          title: "Web Flagship",
          status: "Capa web · proyecciones public-safe",
          body:
            "Capa de producto y showroom con interfaces públicas y proyecciones del Runtime. La web presenta y consume contratos; no crea autoridad ni ejecuta trabajo del Runtime.",
          tags: ["Next.js", "Product UI", "Runtime projections", "Public-safe"],
          href: "https://github.com/TransformIA-AI/transformia-web-flagship"
        },
        {
          title: "TransformIA Workpod Launcher",
          status: "Activación local · sin despliegue",
          body:
            "Capa de preparación y activación: valida packs, genera diagnóstico, dry-run, workspace local y evidencia public-safe para un handoff posterior. No provisiona, despliega ni ejecuta proveedores.",
          tags: ["Activation", "Diagnostics", "Dry-run", "Configuration"],
          href: "https://github.com/TransformIA-AI/transformia-capsule-launcher"
        }
      ],
      cta: "Ver TransformIA en detalle",
      slug: "transformia-proof-of-work"
    },
    technicalStory: {
      eyebrow: "TECNOLOGÍA EN PARALELO",
      title: "La tecnología nunca fue una reconversión",
      body:
        "La informática ha formado parte de mi vida desde niño. Empecé con Spectrum y PCs 386/486, montando y configurando ordenadores con mi padre, y desde entonces nunca dejé de aprender ni de trabajar con tecnología.\n\nDurante mi carrera profesional esa capacidad convivió con operaciones y management: Excel y Microsoft Office a nivel avanzado, sistemas corporativos, datos, CRM, automatización y herramientas de productividad. Desde 2020/2021 profundicé de forma deliberada en inteligencia artificial, Machine Learning, Computer Science y desarrollo de software.\n\nHoy trabajo con Microsoft 365, Excel, Salesforce, Azure, Python, C, R, SQL, JavaScript/TypeScript, APIs, Git/GitHub, Power BI, Jira/JSM y herramientas de IA. TransformIA es la expresión práctica de esa base técnica: sistemas y productos que diseño y construyo para aprender haciendo y entender la tecnología desde dentro.",
      capabilities: [
        { title: "MICROSOFT & ENTERPRISE", items: ["Microsoft 365", "Excel avanzado", "Power BI", "Azure", "Microsoft Foundry"] },
        { title: "PROJECT & SERVICE", items: ["Jira", "Atlassian JSM", "ITSM", "Digital Workplace", "Nexthink"] },
        { title: "CRM & BUSINESS SYSTEMS", items: ["Salesforce", "Automatización de procesos", "Reporting", "Sistemas de conocimiento"] },
        { title: "SOFTWARE & DATA", items: ["Python", "C", "R", "SQL", "JavaScript / TypeScript", "React / Next.js", "APIs", "Git / GitHub"] },
        { title: "APPLIED AI", items: ["Agentes", "RAG / Search", "MCP", "Human-in-the-Loop", "AI governance", "Policy / evidence", "Automatización"] }
      ]
    },
    conciergeSection: {
      eyebrow: "ENCAJE PROFESIONAL",
      title: "Respuestas directas para recruiters y hiring managers",
      body:
        "Guía interactiva basada únicamente en información pública del portfolio. Resume experiencia, escala y base técnica sin enviar mensajes ni ejecutar acciones.",
      badge: "Información pública · revisión humana"
    },
    credentialsSection: {
      eyebrow: "FORMACIÓN Y CREDENCIALES",
      title: "Formación que refuerza una base técnica práctica",
      body:
        "Combino aprendizaje continuo con construcción real. HarvardX CS50x y CS50AI reforzaron fundamentos que ya aplico en software e IA; SMPC® formaliza la disciplina Agile y Scrum que acompaña mi experiencia de delivery.",
      items: [
        { title: "HarvardX CS50x", subtitle: "Introduction to Computer Science", body: "Computer Science, Python, SQL, algoritmos y estructuras de datos." },
        { title: "HarvardX CS50AI", subtitle: "Introduction to Artificial Intelligence with Python", body: "Búsqueda, conocimiento, incertidumbre, optimización, machine learning, redes neuronales y lenguaje." },
        { title: "CertiProf SMPC®", subtitle: "Scrum Master Professional Certification", body: "Scrum, facilitación de equipos, trabajo iterativo, gestión de impedimentos y mejora continua." },
        { title: "Machine Learning & Artificial Intelligence", subtitle: "200 h", body: "Formación aplicada completada en 2023." },
        { title: "Azure AI / Microsoft Foundry", subtitle: "Formación continua", body: "Aprendizaje continuo en aplicaciones de IA, agentes y arquitectura." }
      ]
    },
    cvHub: {
      eyebrow: "CV",
      title: "Una identidad profesional. Dos idiomas.",
      body:
        "Project Manager con experiencia ejecutiva en operaciones y delivery, trayectoria en consultoría tecnológica y profundidad técnica en IA aplicada.",
      downloadPdf: "Descargar PDF",
      files: [
        { id: "es", href: cvRoutes.es, label: "Descargar CV Español", shortLabel: "CV Español", language: "Español", audience: "Project Management · Technology Delivery · Transformación Digital · IA aplicada" },
        { id: "en", href: cvRoutes.en, label: "Download English CV", shortLabel: "CV English", language: "English", audience: "Project Management · Technology Delivery · Digital Transformation · Applied AI" }
      ]
    },
    contact: {
      eyebrow: "CONTACTO PROFESIONAL",
      title: "Si necesitas a alguien que pueda entrar, ordenar y hacer avanzar un proyecto, hablemos.",
      body:
        "Busco posiciones de Project Manager, Technical PM, Technology Delivery y transformación tecnológica/IA. Preferencia por remoto, pero abierto a híbrido o presencial en Madrid cuando el proyecto y la oportunidad lo justifican.",
      requestInterview: "Solicitar entrevista",
      linkedin: "LinkedIn",
      cvHub: "Descargar CV"
    },
    casePage: {
      back: "Volver a experiencia", role: "Rol", sector: "Ámbito", boundary: "Alcance público", evidence: "Claves", nextStep: "Siguiente paso",
      nextStepBody: "Descarga el CV o vuelve a la experiencia para revisar el perfil profesional completo."
    },
    pages: {
      cv: { title: "CV | Daniel Medina Sánchez", description: "CV de Daniel Medina Sánchez en español e inglés." },
      lab: { title: "TransformIA | Proof of Work", description: "Sistemas y arquitectura de IA aplicada construidos por Daniel Medina Sánchez." },
      contact: { title: "Contacto | Daniel Medina Sánchez", description: "Contacto profesional para Project Management, Technology Delivery y transformación tecnológica." },
      privacy: {
        title: "Privacidad", description: "Información de privacidad del portfolio de Daniel Medina Sánchez.", heading: "Privacidad y límites",
        paragraphs: [
          "Esta web no utiliza formularios de envío, cuentas de usuario ni automatizaciones de contratación.",
          "Los enlaces de contacto abren el cliente de correo o LinkedIn. No se publican datos de clientes, documentación interna, secretos ni credenciales.",
          "Los casos describen experiencia y trabajo propio con un nivel de detalle apto para publicación."
        ]
      },
      assets: {
        title: "Activos públicos", description: "Descargas públicas del portfolio de Daniel Medina Sánchez.", eyebrow: "ACTIVOS", heading: "CV público",
        body: "Dos versiones lingüísticas de una única identidad profesional.", boundaryTitle: "Límite público", boundaryBody: "Estos PDFs son los únicos CV canónicos enlazados por la web."
      },
      designSystem: {
        title: "Sistema visual", description: "Sistema visual Tier-S del portfolio de Daniel Medina Sánchez.", eyebrow: "SISTEMA VISUAL", heading: "Claridad ejecutiva, lectura rápida",
        body: "Una paleta contenida y una jerarquía directa para que experiencia, escala y evidencia sean lo primero."
      }
    },
    recruiter: {
      headerTitle: "Guía de encaje", headerSubtitle: "Respuestas desde contenido público", statusChip: "Revisión humana", boundaryLabel: "Límite:",
      boundaryText: "no envía mensajes, agenda reuniones ni toma decisiones.",
      initialMessage: "Pregunta por experiencia, Project Management, Ayesa, Konecta o base técnica. Responderé solo con información pública de esta web.",
      suggestedQuestions: ["¿Qué escala ha gestionado?", "¿Cuál es su experiencia como Project Manager?", "¿Qué aporta su base técnica?", "¿Cómo trabaja con stakeholders?"],
      inputPlaceholder: "Escribe una pregunta", sendLabel: "Enviar", roleFit: "Encaje orientativo", fitScoreSuffix: "/100", confidence: "Confianza", pending: "pendiente",
      recommendedCv: "CV recomendado", askFirst: "Haz una pregunta", download: "Descargar CV", approvalStatus: "Contacto", requestInterview: "Solicitar entrevista",
      approvalDefault: "La solicitud abre el canal de contacto; Daniel decide y responde personalmente.", pendingApproval: "Solicitud preparada. Utiliza el enlace de contacto para enviarla.",
      answers: {
        operations: { content: "La experiencia operativa prueba seniority: 560+ personas, 4 países, P&L superior a 12 M€ y 8 líneas de servicio. Esa escala se traduce en presupuesto, recursos, riesgos, stakeholders y delivery multistream.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["560+ personas", "4 países", ">12M€ P&L", "8 líneas"] },
        publicSector: { content: "Actualmente es Project Manager en ICEX dentro de Ayesa y coordina un perímetro de 30+ personas. Su experiencia en la compañía incluye también Madrid Digital, Justicia y UOC.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Ayesa", "ICEX", "30+ personas", "Jira/JSM"] },
        technical: { content: "Su base técnica combina CS50x, CS50AI, Machine Learning, Python, Azure y construcción de sistemas en TransformIA. La tecnología es una trayectoria paralela y demostrable.", confidence: "high", fitScore: 94, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["CS50x", "CS50AI", "Azure", "TransformIA"] },
        hitl: { content: "Los sistemas de TransformIA mantienen políticas, evidencia y revisión humana como límites de gobierno. El portfolio no presenta esa implementación como producción.", confidence: "high", fitScore: 91, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "El encaje principal es Project Manager o Technical PM en contextos de Technology Delivery, transformación digital e IA aplicada. Aporta gestión ejecutiva previa y criterio técnico propio.", confidence: "high", fitScore: 97, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Project Manager", "Technology Delivery", "Applied AI"] },
        fallback: { content: "Daniel es Project Manager con experiencia ejecutiva en delivery y una base técnica real en IA aplicada. Pregunta por Ayesa, Konecta, stakeholders o TransformIA para concretar.", confidence: "medium", fitScore: 88, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: Project Management en ICEX y consultoría tecnológica", eyebrow: "PROJECT MANAGEMENT · TECHNOLOGY CONSULTING",
        role: "Project Manager", sector: "Sector público · Digital Workplace · ITSM · transformación tecnológica",
        summary: "Project Manager en ICEX, con experiencia previa en consultoría estratégica de IA para Madrid Digital, Justicia y UOC.",
        proof: ["Madrid Digital", "Justicia", "UOC", "ICEX", "30+ personas", "Jira/JSM", "Microsoft 365", "Power BI"],
        tags: ["Project Management", "Technology Delivery", "Public Sector", "ITSM"],
        publicSafeNote: "Descripción profesional sin documentación interna, datos de cliente ni información confidencial.",
        sections: [
          { title: "Responsabilidad actual", body: ["Soy Project Manager en ICEX. Coordino un perímetro de 30+ personas y trabajo sobre planificación, seguimiento, entregables, contingencias, stakeholders y reporting con Microsoft 365, Jira/JSM y Power BI.", "Mi experiencia en Ayesa incluye Madrid Digital, con estrategia, roadmaps, modernización y documentación ejecutiva; Justicia, con análisis funcional y transformación de procesos; y UOC, con casos de uso, knowledge/CRM, Salesforce y análisis funcional."] },
          { title: "Qué demuestra", body: "Mi trabajo en Ayesa combina Project Management, coordinación de personas, gestión de stakeholders, foco ejecutivo y conocimiento de entornos tecnológicos y de sector público." }
        ]
      },
      {
        slug: "konecta-operaciones-escala-seguros", title: "Konecta: complejidad ejecutiva antes del Project Management tecnológico", eyebrow: "BUSINESS MANAGEMENT · ESCALA",
        role: "Business Manager", sector: "Operación aseguradora multicanal", summary: "560+ personas, 4 países, P&L superior a 12 M€/año y 8 líneas de servicio.",
        proof: ["560+ personas", "4 países", ">12M€ P&L", "8 líneas", "SLA/KPI", "Capacidad", "Margen", "Continuidad"],
        tags: ["Business Management", "P&L", "SLA/KPI", "Distributed Delivery"],
        publicSafeNote: "Métricas agregadas y responsabilidades profesionales; no incluye datos operativos del cliente.",
        sections: [
          { title: "Responsabilidad", body: "Como Business Manager goberné capacidad, SLA/KPI, calidad, productividad, facturación, margen, continuidad, desviaciones, escalaciones y planes correctivos, con relación ejecutiva con un cliente estratégico." },
          { title: "Traducción a Project Management", body: "La experiencia se traduce directamente en financial governance, resource planning, risk/issue management, stakeholder management, reporting ejecutivo y multi-workstream delivery." }
        ]
      },
      {
        slug: "transformia-proof-of-work", title: "TransformIA: sistemas de IA aplicada como proof of work", eyebrow: "TECNOLOGÍA EN PARALELO",
        role: "Diseño y construcción de sistemas propios", sector: "Runtimes, agentes, gobierno, producto web y activación",
        summary: "Productos, runtimes y arquitecturas que demuestran una base técnica práctica en IA aplicada.",
        proof: ["Exocortex Runtime", "Astrolabio Metamente", "Web Flagship", "Workpod Launcher", "Human-in-the-Loop", "MCP"],
        tags: ["Applied AI", "Agents", "Governance", "Architecture"],
        publicSafeNote: "Las capacidades se describen según evidencia de repositorio y con límites explícitos; no se presentan como producción ni validación de cliente.",
        sections: [
          { title: "Por qué existe", body: "TransformIA reúne los sistemas que diseño y construyo para entender de primera mano qué funciona, qué falla, cómo se gobierna y qué necesita una organización para aplicar IA al trabajo real." },
          { title: "Arquitectura y límites", body: ["Exocortex Runtime concentra ejecución gobernada, políticas, evidencia y aprobación humana. Astrolabio explora contexto, autoridad y recuperación semántica sin sustituir la autoridad del Runtime.", "Web Flagship presenta proyecciones public-safe. Workpod Launcher prepara activación, diagnóstico y evidencia local. Ninguna de estas tarjetas afirma despliegue, producción o validación de cliente."] }
        ]
      }
    ]
  },
  en: {
    metadata: {
      title: "Daniel Medina Sánchez | Project Manager · Technology Delivery · Applied AI",
      description:
        "Project Manager with 15+ years of leadership experience, 560+ people across 4 countries, and P&L above €12M. Ayesa, public sector, ITSM, Digital Workplace, and an applied-AI technical portfolio.",
      openGraphLocale: "en_GB"
    },
    nav: {
      identityName: "Daniel Medina", identityRole: "Project Manager · Technology · Applied AI", homeAria: "Daniel Medina Sánchez home",
      links: [{ href: "/#work", label: "Profile" }, { href: "/#experience", label: "Experience" }, { href: "/#lab", label: "TransformIA" }, { href: "/#cv", label: "CV" }, { href: "/#contact", label: "Contact" }],
      bookInterview: "Request interview", cv: "CV"
    },
    footer: {
      body: "Project Manager with executive-scale operations and delivery experience, a technology consulting track record, and demonstrable technical depth in applied AI. Cases exclude confidential data and internal documentation.",
      links: { privacy: "Privacy", assets: "Assets", designSystem: "Design system", github: "GitHub" }
    },
    hero: {
      badge: "PROJECT MANAGER · TECHNOLOGY DELIVERY · APPLIED AI", name: "Daniel Medina Sánchez",
      headline: "I lead complex projects where business, people, and technology must work together.",
      body: "I am currently a Project Manager at ICEX within Ayesa, after working on initiatives for Madrid Digital, Justice, and UOC. I bring more than 15 years of experience managing teams, clients, operations, and business results, including responsibility for organizations of 560+ people across four countries and P&L above €12M/year.\n\nI combine that management foundation with unusual technical depth for a Project Management profile: Digital Workplace, ITSM, Microsoft 365, Jira/JSM, Salesforce, Azure, data, programming, and applied AI. My job is to connect strategy, delivery, and execution until things work.",
      downloadCv: "Download CV", viewAyesa: "View Ayesa progression", contact: "Request interview", credentialsLabel: "CAREER", credentials: sharedCareer, primaryCvHref: cvRoutes.en,
      profile: { label: "Current profile", name: "Daniel Medina", role: "Project Manager · Technology Delivery · Applied AI", chips: ["Project Management", "Technology Delivery", "Applied AI"] },
      stats: [{ value: "15+", label: "years" }, { value: "560+", label: "people" }, { value: "4", label: "countries" }, { value: "€12M+", label: "P&L" }, { value: "Project Manager", label: "ICEX / Ayesa · present" }]
    },
    valueAreas: {
      eyebrow: "PROJECT MANAGEMENT", title: "Management, delivery, and technology in one profile",
      body: "I manage projects with a complete view of the problem: objectives, people, resources, risks, stakeholders, technology, and business outcomes. My experience in large-scale operations brings execution discipline; my technical background gives me a deeper understanding of what we are building and lets me work directly with technical teams.",
      items: [
        { title: "DELIVERY", body: "Planning · milestones · resources · dependencies · risks · contingencies · tracking · deliverables", tags: ["Planning", "Dependencies", "Risks", "Deliverables"] },
        { title: "GOVERNANCE & STAKEHOLDERS", body: "Budget · priorities · executive reporting · client · negotiation · decision-making", tags: ["Budget", "Stakeholders", "Reporting", "Decisions"] },
        { title: "TECHNOLOGY", body: "Digital Workplace · ITSM · Microsoft 365 · Jira/JSM · Salesforce · Azure · data · automation · applied AI", tags: ["Microsoft 365", "Salesforce", "Azure", "Applied AI"] }
      ]
    },
    proof: {
      eyebrow: "EXPERIENCE", title: "Project Management backed by executive and technical depth",
      body: "I currently lead technology projects with experience spanning operations, Service Delivery, Business Management, consulting, and transformation.",
      careerLabel: "Experience at a glance",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operations · coordination" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · executive scale" },
        { period: "2025–present", title: "Ayesa", detail: "Technology Consulting → Project Management" }
      ],
      ayesa: {
        eyebrow: "AYESA · PROJECT MANAGEMENT & TECHNOLOGY CONSULTING", title: "Project Management at ICEX and public-sector technology experience", period: "Aug 2025 · present",
        items: [
          { period: "2025", client: "Madrid Digital", role: "AI Strategy & Digital Workplace Consultant", detail: "Strategy · roadmaps · workplace modernization · executive documentation" },
          { period: "2025", client: "Justice", role: "AI Strategy Consultant", detail: "Functional analysis · process transformation · public administration" },
          { period: "2025", client: "UOC", role: "AI Strategy Consultant", detail: "Use cases · knowledge/CRM · Salesforce · functional analysis" },
          { period: "2026 → PRESENT", client: "ICEX", role: "PROJECT MANAGER", detail: "30+ people · planning · tracking · deliverables · contingencies · stakeholders · Jira/JSM · Microsoft 365 · Power BI" }
        ],
        supporting: "I currently manage projects at ICEX within Ayesa, with responsibility for planning, tracking, deliverables, contingencies, stakeholders, reporting, and team coordination. My earlier work across Madrid Digital, Justice, and UOC broadened that experience across transformation, Digital Workplace, the public sector, and applied AI.",
        cta: "View Ayesa case", slug: "ayesa-digital-workplace-sector-publico-icex"
      }
    },
    konecta: {
      eyebrow: "KONECTA · EXECUTIVE SCALE", title: "Executive scale applied to Project Management",
      body: "At Konecta, I led a 560+ person scope across four countries with P&L above €12M/year, governing capacity, SLA/KPI, quality, billing, margin, deviations, continuity, and executive client relationships. That experience directly shapes how I manage resources, risks, stakeholders, and multiple workstreams today.",
      metrics: [{ value: "560+", label: "people" }, { value: "4", label: "countries" }, { value: ">€12M", label: "annual P&L" }, { value: "8", label: "service lines" }],
      details: ["SLA/KPI, capacity, and quality", "Billing, margin, and deviations", "Continuity, escalations, and corrective plans", "Executive relationship with a strategic client"],
      cta: "View Konecta case", slug: "konecta-operaciones-escala-seguros"
    },
    lab: {
      eyebrow: "TECHNOLOGY IN PARALLEL · PROOF OF WORK", title: "TransformIA: I do not study AI from the outside. I build it.",
      body: "TransformIA is where I build technology. I design applied-AI products and systems to work directly with agents, runtimes, semantic recovery, governance, evidence, interfaces, and Azure.\n\nI do not use it to demonstrate familiarity with AI tools. I use it to understand how AI systems are designed, integrated, governed, and turned into products.",
      projectsTitle: "Systems built · status bounded by evidence",
      projects: [
        { title: "Exocortex Runtime", status: "Repository-implemented baseline", body: "A governed agentic runtime for traceable work: Work Units, tool registry, policy engine, evidence, and human approval. MCP is a governed boundary, not permission to act.", tags: ["Agents", "Policy", "Evidence", "Human-in-the-Loop", "MCP"], href: "https://github.com/TransformIA-AI/transformia-exocortex-runtime" },
        { title: "Astrolabio Metamente", status: "Private implementation · not production", body: "A cognitive and authority plane for governed context and semantic recovery. It includes contracts, a local ledger, Lens, and read-only MCP transport; it does not replace Runtime authority.", tags: ["Authority", "Semantic recovery", "Context", "Read-only MCP"], href: "https://github.com/TransformIA-AI/transformia-astrolabio-metamente" },
        { title: "Web Flagship", status: "Web layer · public-safe projections", body: "A product and showroom layer with public interfaces and Runtime projections. The web presents and consumes contracts; it does not create authority or execute Runtime work.", tags: ["Next.js", "Product UI", "Runtime projections", "Public-safe"], href: "https://github.com/TransformIA-AI/transformia-web-flagship" },
        { title: "TransformIA Workpod Launcher", status: "Local activation · no deployment", body: "A preparation and activation layer: validates packs and produces diagnostics, dry-run plans, a local workspace, and public-safe evidence for later handoff. It does not provision, deploy, or call providers.", tags: ["Activation", "Diagnostics", "Dry-run", "Configuration"], href: "https://github.com/TransformIA-AI/transformia-capsule-launcher" }
      ],
      cta: "View TransformIA in detail", slug: "transformia-proof-of-work"
    },
    technicalStory: {
      eyebrow: "TECHNOLOGY IN PARALLEL", title: "Technology was never a career conversion",
      body: "Computing has been part of my life since childhood. I started with Spectrum and 386/486 PCs, building and configuring computers with my father, and I have continued learning and working with technology ever since.\n\nThroughout my professional career, that capability coexisted with operations and management: advanced Excel and Microsoft Office, corporate systems, data, CRM, automation, and productivity tools. From 2020/2021, I deepened my work in artificial intelligence, Machine Learning, Computer Science, and software development.\n\nToday I work with Microsoft 365, Excel, Salesforce, Azure, Python, C, R, SQL, JavaScript/TypeScript, APIs, Git/GitHub, Power BI, Jira/JSM, and AI tools. TransformIA is the practical expression of that technical foundation: systems and products I design and build to learn by doing and understand technology from the inside.",
      capabilities: [
        { title: "MICROSOFT & ENTERPRISE", items: ["Microsoft 365", "Advanced Excel", "Power BI", "Azure", "Microsoft Foundry"] },
        { title: "PROJECT & SERVICE", items: ["Jira", "Atlassian JSM", "ITSM", "Digital Workplace", "Nexthink"] },
        { title: "CRM & BUSINESS SYSTEMS", items: ["Salesforce", "Process automation", "Reporting", "Knowledge systems"] },
        { title: "SOFTWARE & DATA", items: ["Python", "C", "R", "SQL", "JavaScript / TypeScript", "React / Next.js", "APIs", "Git / GitHub"] },
        { title: "APPLIED AI", items: ["Agents", "RAG / Search", "MCP", "Human-in-the-Loop", "AI governance", "Policy / evidence", "Automation"] }
      ]
    },
    conciergeSection: {
      eyebrow: "PROFESSIONAL FIT", title: "Direct answers for recruiters and hiring managers",
      body: "An interactive guide based only on public portfolio information. It summarizes experience, scale, and technical grounding without sending messages or taking action.", badge: "Public information · human review"
    },
    credentialsSection: {
      eyebrow: "EDUCATION & CREDENTIALS", title: "Learning that strengthens a practical technical foundation",
      body: "I combine continuous learning with real construction. HarvardX CS50x and CS50AI strengthened foundations I already apply in software and AI; SMPC® formalizes the Agile and Scrum discipline that supports my delivery experience.",
      items: [
        { title: "HarvardX CS50x", subtitle: "Introduction to Computer Science", body: "Computer Science, Python, SQL, algorithms, and data structures." },
        { title: "HarvardX CS50AI", subtitle: "Introduction to Artificial Intelligence with Python", body: "Search, knowledge, uncertainty, optimization, machine learning, neural networks, and language." },
        { title: "CertiProf SMPC®", subtitle: "Scrum Master Professional Certification", body: "Scrum, team facilitation, iterative work, impediment management, and continuous improvement." },
        { title: "Machine Learning & Artificial Intelligence", subtitle: "200 hours", body: "Applied training completed in 2023." },
        { title: "Azure AI / Microsoft Foundry", subtitle: "Continuous learning", body: "Ongoing training in AI applications, agents, and architecture." }
      ]
    },
    cvHub: {
      eyebrow: "CV", title: "One professional identity. Two languages.",
      body: "Project Manager with executive operations and delivery experience, a technology consulting track record, and technical depth in applied AI.", downloadPdf: "Download PDF",
      files: [
        { id: "es", href: cvRoutes.es, label: "Descargar CV Español", shortLabel: "CV Español", language: "Spanish", audience: "Project Management · Technology Delivery · Digital Transformation · Applied AI" },
        { id: "en", href: cvRoutes.en, label: "Download English CV", shortLabel: "CV English", language: "English", audience: "Project Management · Technology Delivery · Digital Transformation · Applied AI" }
      ]
    },
    contact: {
      eyebrow: "PROFESSIONAL CONTACT", title: "If you need someone who can step in, create order, and move a project forward, let's talk.",
      body: "I am looking for Project Manager, Technical PM, Technology Delivery, and technology/AI transformation roles. I prefer remote work, while remaining open to hybrid or on-site opportunities in Madrid when the project and opportunity justify it.",
      requestInterview: "Request interview", linkedin: "LinkedIn", cvHub: "Download CV"
    },
    casePage: { back: "Back to experience", role: "Role", sector: "Scope", boundary: "Public boundary", evidence: "Key evidence", nextStep: "Next step", nextStepBody: "Download the CV or return to experience to review the full professional profile." },
    pages: {
      cv: { title: "CV | Daniel Medina Sánchez", description: "Daniel Medina Sánchez's CV in Spanish and English." },
      lab: { title: "TransformIA | Proof of Work", description: "Applied-AI systems and architecture built by Daniel Medina Sánchez." },
      contact: { title: "Contact | Daniel Medina Sánchez", description: "Professional contact for Project Management, Technology Delivery, and technology transformation." },
      privacy: { title: "Privacy", description: "Privacy information for Daniel Medina Sánchez's portfolio.", heading: "Privacy and boundaries", paragraphs: ["This website has no submission forms, user accounts, or automated hiring actions.", "Contact links open email or LinkedIn. Client data, internal documents, secrets, and credentials are not published.", "Cases describe professional experience and own work at a public-safe level."] },
      assets: { title: "Public assets", description: "Public downloads from Daniel Medina Sánchez's portfolio.", eyebrow: "ASSETS", heading: "Public CV", body: "Two language versions of one professional identity.", boundaryTitle: "Public boundary", boundaryBody: "These PDFs are the only canonical CVs linked by the website." },
      designSystem: { title: "Design system", description: "Tier-S visual system for Daniel Medina Sánchez's portfolio.", eyebrow: "DESIGN SYSTEM", heading: "Executive clarity, fast reading", body: "A restrained palette and direct hierarchy that put experience, scale, and evidence first." }
    },
    recruiter: {
      headerTitle: "Fit guide", headerSubtitle: "Answers from public content", statusChip: "Human review", boundaryLabel: "Boundary:", boundaryText: "does not send messages, schedule meetings, or make decisions.",
      initialMessage: "Ask about experience, Project Management, Ayesa, Konecta, or technical depth. I will answer only from public information on this website.",
      suggestedQuestions: ["What scale has he managed?", "What is his Project Management experience?", "What does his technical depth add?", "How does he work with stakeholders?"],
      inputPlaceholder: "Type a question", sendLabel: "Send", roleFit: "Indicative fit", fitScoreSuffix: "/100", confidence: "Confidence", pending: "pending", recommendedCv: "Recommended CV", askFirst: "Ask a question", download: "Download CV", approvalStatus: "Contact", requestInterview: "Request interview",
      approvalDefault: "The request opens the contact channel; Daniel decides and replies personally.", pendingApproval: "Request prepared. Use the contact link to send it.",
      answers: {
        operations: { content: "The operations background proves seniority: 560+ people, four countries, P&L above €12M, and eight service lines. That scale translates into budget, resources, risks, stakeholders, and multi-workstream delivery.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["560+ people", "4 countries", ">€12M P&L", "8 lines"] },
        publicSector: { content: "He is currently a Project Manager at ICEX within Ayesa, coordinating a 30+ person perimeter. His experience with the company also includes Madrid Digital, Justice, and UOC.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Ayesa", "ICEX", "30+ people", "Jira/JSM"] },
        technical: { content: "His technical grounding combines CS50x, CS50AI, Machine Learning, Python, Azure, and hands-on systems work through TransformIA. Technology is a parallel, demonstrable track.", confidence: "high", fitScore: 94, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["CS50x", "CS50AI", "Azure", "TransformIA"] },
        hitl: { content: "TransformIA systems use policy, evidence, and human review as governance boundaries. The portfolio does not present this work as production.", confidence: "high", fitScore: 91, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "The primary fit is Project Manager or Technical PM in Technology Delivery, digital transformation, and applied-AI contexts. He brings prior executive management and informed technical judgment.", confidence: "high", fitScore: 97, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Project Manager", "Technology Delivery", "Applied AI"] },
        fallback: { content: "Daniel is a Project Manager with executive delivery experience and real technical grounding in applied AI. Ask about Ayesa, Konecta, stakeholders, or TransformIA for specifics.", confidence: "medium", fitScore: 88, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: Project Management at ICEX and technology consulting", eyebrow: "PROJECT MANAGEMENT · TECHNOLOGY CONSULTING", role: "Project Manager",
        sector: "Public sector · Digital Workplace · ITSM · technology transformation", summary: "Project Manager at ICEX, with previous AI strategy consulting experience across Madrid Digital, Justice, and UOC.",
        proof: ["Madrid Digital", "Justice", "UOC", "ICEX", "30+ people", "Jira/JSM", "Microsoft 365", "Power BI"], tags: ["Project Management", "Technology Delivery", "Public Sector", "ITSM"],
        publicSafeNote: "Professional description with no internal documentation, client data, or confidential information.",
        sections: [
          { title: "Current responsibility", body: ["I am a Project Manager at ICEX. I coordinate a 30+ person perimeter and work across planning, tracking, deliverables, contingencies, stakeholders, and reporting with Microsoft 365, Jira/JSM, and Power BI.", "My Ayesa experience also includes Madrid Digital, focused on strategy, roadmaps, modernization, and executive documentation; Justice, focused on functional analysis and process transformation; and UOC, focused on use cases, knowledge/CRM, Salesforce, and functional analysis."] },
          { title: "What it proves", body: "My work at Ayesa combines Project Management, team coordination, stakeholder management, executive focus, and knowledge of technology and public-sector environments." }
        ]
      },
      {
        slug: "konecta-operaciones-escala-seguros", title: "Konecta: executive complexity before technology Project Management", eyebrow: "BUSINESS MANAGEMENT · SCALE", role: "Business Manager", sector: "Multichannel insurance operations", summary: "560+ people, four countries, P&L above €12M/year, and eight service lines.",
        proof: ["560+ people", "4 countries", ">€12M P&L", "8 lines", "SLA/KPI", "Capacity", "Margin", "Continuity"], tags: ["Business Management", "P&L", "SLA/KPI", "Distributed Delivery"],
        publicSafeNote: "Aggregated metrics and professional responsibilities; no client operating data is included.",
        sections: [
          { title: "Responsibility", body: "As Business Manager, I governed capacity, SLA/KPI, quality, productivity, billing, margin, continuity, deviations, escalations, and corrective plans, with an executive relationship with a strategic client." },
          { title: "Translation into Project Management", body: "The experience translates directly into financial governance, resource planning, risk/issue management, stakeholder management, executive reporting, and multi-workstream delivery." }
        ]
      },
      {
        slug: "transformia-proof-of-work", title: "TransformIA: applied-AI systems as proof of work", eyebrow: "TECHNOLOGY IN PARALLEL", role: "Design and construction of own systems", sector: "Runtimes, agents, governance, web product, and activation", summary: "Products, runtimes, and architectures that demonstrate a practical technical foundation in applied AI.",
        proof: ["Exocortex Runtime", "Astrolabio Metamente", "Web Flagship", "Workpod Launcher", "Human-in-the-Loop", "MCP"], tags: ["Applied AI", "Agents", "Governance", "Architecture"],
        publicSafeNote: "Capabilities are described from repository evidence with explicit boundaries; they are not presented as production or customer validation.",
        sections: [
          { title: "Why it exists", body: "TransformIA brings together the systems I design and build to understand first-hand what works, what fails, how it should be governed, and what an organization needs to apply AI to real work." },
          { title: "Architecture and boundaries", body: ["Exocortex Runtime holds governed execution, policy, evidence, and human approval. Astrolabio explores context, authority, and semantic recovery without replacing Runtime authority.", "Web Flagship presents public-safe projections. Workpod Launcher prepares activation, diagnostics, and local evidence. None of these cards claims deployment, production, or customer validation."] }
        ]
      }
    ]
  }
} as const;

export type PortfolioDictionary = (typeof portfolioContent)[Locale];
export type LocalizedCaseStudy = PortfolioDictionary["cases"][number];

export function getPortfolioContent(locale: Locale): PortfolioDictionary {
  return portfolioContent[locale];
}

export const caseStudies = portfolioContent.en.cases;
