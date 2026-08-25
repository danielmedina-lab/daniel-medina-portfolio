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
      badge: "Disponible · Remoto · Híbrido · Presencial Madrid",
      name: "Daniel Medina Sánchez",
      headline:
        "Project Manager. Antes de gestionar proyectos tecnológicos, ya gestionaba negocio, personas y resultados a escala.",
      body:
        "He dirigido operaciones de 560+ personas en 4 países y P&L superior a 12 M€/año. En Ayesa trasladé esa experiencia al mundo tecnológico: Madrid Digital, Justicia y UOC como consultor estratégico de IA y, actualmente, Project Manager en ICEX.\n\nEn paralelo llevo años profundizando en tecnología e inteligencia artificial. TransformIA es donde esa evolución se convierte en sistemas reales. Mi valor está en moverme entre negocio, delivery y tecnología sin perder ninguno de los tres planos.",
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
      eyebrow: "POR QUÉ ENCAJO EN PROJECT MANAGEMENT",
      title: "Gestión a escala + delivery tecnológico + profundidad real en IA",
      body:
        "No llegué a Project Management desde un curso. Llegué después de años gestionando presupuesto, capacidad, SLA, desviaciones, equipos distribuidos, clientes y múltiples líneas de servicio.\n\nAyesa convirtió esa disciplina de gestión en delivery tecnológico. TransformIA añade la capa que hoy diferencia mi perfil: puedo moverme entre negocio, proyecto y tecnología con criterio propio.",
      items: [
        {
          title: "Gobierno y delivery",
          body: "Planificación, recursos, hitos, riesgos, contingencias, reporting y ejecución.",
          tags: ["Planificación", "Recursos", "RAID", "Reporting"]
        },
        {
          title: "Stakeholders y negocio",
          body: "Cliente, presupuesto, P&L, prioridades, negociación y toma de decisiones.",
          tags: ["Stakeholders", "P&L", "Negociación", "Decisiones"]
        },
        {
          title: "Tecnología e IA aplicada",
          body: "Digital Workplace, ITSM, Azure, agentes, automatización y arquitectura de sistemas de IA.",
          tags: ["ITSM", "Azure", "Agentes", "Arquitectura IA"]
        }
      ]
    },
    proof: {
      eyebrow: "TRAYECTORIA PROFESIONAL",
      title: "Operaciones → Service Delivery → Business Management → Project Management",
      body:
        "La progresión es continua: primero aprendí a sostener operaciones, después a gobernar servicios y negocio a escala, y finalmente trasladé esa disciplina a consultoría tecnológica y Project Management.",
      careerLabel: "Evolución profesional",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operaciones · coordinación" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · escala ejecutiva" },
        { period: "2025–actualidad", title: "Ayesa", detail: "Technology Consulting → Project Management" }
      ],
      ayesa: {
        eyebrow: "AYESA · TECHNOLOGY CONSULTING → PROJECT MANAGEMENT",
        title: "De consultoría estratégica a Project Manager en ICEX",
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
          "Ayesa fue el puente entre mi experiencia directiva y el mundo tecnológico. Entré en consultoría estratégica y fui asumiendo cada vez más responsabilidad de delivery hasta evolucionar a Project Manager en ICEX. No empecé entonces a gestionar: trasladé a tecnología una disciplina que ya venía de años dirigiendo operaciones complejas.",
        cta: "Ver caso Ayesa",
        slug: "ayesa-digital-workplace-sector-publico-icex"
      }
    },
    konecta: {
      eyebrow: "KONECTA · ESCALA EJECUTIVA",
      title: "Antes del Project Management tecnológico, ya gestionaba complejidad a escala.",
      body:
        "Como Business Manager goberné SLA/KPI, capacidad, facturación, margen, calidad, continuidad, desviaciones y relación ejecutiva con cliente. Hoy esa experiencia se traduce directamente en resource planning, financial governance, risk/issues, stakeholders y multi-workstream delivery.",
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
        "Mi relación con la tecnología empezó mucho antes de la IA generativa. Crecí trasteando y montando ordenadores con mi padre, desde Spectrum y PCs 386/486 hasta mi propio Pentium III.\n\nA partir de 2020/2021 empecé a profundizar deliberadamente en inteligencia artificial. Después vinieron Machine Learning, Computer Science, Python, CS50x, CS50AI, Azure y agentes.\n\nTransformIA es donde todo eso deja de ser formación y se convierte en sistemas. Diseño y construyo productos, runtimes y arquitecturas de IA aplicada para entender de primera mano qué funciona, qué falla, cómo se gobierna y cómo puede trasladarse a negocio.",
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
      eyebrow: "TRAYECTORIA TÉCNICA",
      title: "De montar ordenadores a construir sistemas de IA",
      body:
        "La informática siempre estuvo ahí. Durante años mi carrera profesional creció por operaciones y negocio mientras, en paralelo, seguía aprendiendo tecnología. Desde 2020/2021 esa segunda trayectoria se volvió deliberada: IA, Machine Learning, Computer Science, Python y posteriormente Azure y arquitectura de agentes.\n\nHoy las dos líneas convergen. La experiencia ejecutiva me permite entender qué necesita una organización; la base técnica me permite trabajar directamente con quienes tienen que construirlo.",
      timeline: [
        "Spectrum / 386 / 486 / Pentium",
        "IA · 2020/21",
        "ML & AI · 2023",
        "CS50x",
        "CS50AI",
        "Azure / Foundry",
        "TransformIA"
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
      title: "Base técnica y disciplina de delivery",
      body:
        "Credenciales que refuerzan una trayectoria ya construida en gestión: fundamentos de Computer Science e IA, trabajo iterativo y formación continua en Azure y arquitectura de agentes.",
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
      nextStepBody: "Descarga el CV o vuelve a la experiencia para revisar la progresión profesional completa."
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
        publicSector: { content: "En Ayesa trabajó en Madrid Digital, Justicia y UOC antes de evolucionar a Project Manager en ICEX, coordinando un perímetro de 30+ personas.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Ayesa", "ICEX", "30+ personas", "Jira/JSM"] },
        technical: { content: "Su base técnica combina CS50x, CS50AI, Machine Learning, Python, Azure y construcción de sistemas en TransformIA. La tecnología es una trayectoria paralela y demostrable.", confidence: "high", fitScore: 94, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["CS50x", "CS50AI", "Azure", "TransformIA"] },
        hitl: { content: "Los sistemas de TransformIA mantienen políticas, evidencia y revisión humana como límites de gobierno. El portfolio no presenta esa implementación como producción.", confidence: "high", fitScore: 91, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "El encaje principal es Project Manager o Technical PM en contextos de Technology Delivery, transformación digital e IA aplicada. Aporta gestión ejecutiva previa y criterio técnico propio.", confidence: "high", fitScore: 97, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Project Manager", "Technology Delivery", "Applied AI"] },
        fallback: { content: "Daniel es Project Manager con experiencia ejecutiva en delivery y una base técnica real en IA aplicada. Pregunta por Ayesa, Konecta, stakeholders o TransformIA para concretar.", confidence: "medium", fitScore: 88, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: de consultoría tecnológica a Project Manager en ICEX", eyebrow: "TECHNOLOGY CONSULTING → PROJECT MANAGEMENT",
        role: "Project Manager", sector: "Sector público · Digital Workplace · ITSM · transformación tecnológica",
        summary: "Progresión desde consultoría estratégica de IA en Madrid Digital, Justicia y UOC hasta Project Manager en ICEX.",
        proof: ["Madrid Digital", "Justicia", "UOC", "ICEX", "30+ personas", "Jira/JSM", "Microsoft 365", "Power BI"],
        tags: ["Project Management", "Technology Delivery", "Public Sector", "ITSM"],
        publicSafeNote: "Descripción profesional sin documentación interna, datos de cliente ni información confidencial.",
        sections: [
          { title: "Progresión", body: ["En 2025 trabajé como consultor estratégico de IA y Digital Workplace en Madrid Digital, con foco en estrategia, roadmaps, modernización y documentación ejecutiva.", "Después participé en Justicia, con análisis funcional y transformación de procesos en Administración Pública, y en UOC, con casos de uso, knowledge/CRM, Salesforce y análisis funcional.", "Desde 2026 soy Project Manager en ICEX. Coordino un perímetro de 30+ personas y trabajo sobre planificación, seguimiento, entregables, contingencias, stakeholders y reporting con Microsoft 365, Jira/JSM y Power BI."] },
          { title: "Qué demuestra", body: "Ayesa trasladó a tecnología una disciplina de gestión ya consolidada en operaciones: ordenar trabajo, coordinar personas, anticipar incidencias, mantener foco ejecutivo y hacer avanzar entregables." }
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
        summary: "Años de aprendizaje técnico convertidos en productos, runtimes y arquitecturas de IA aplicada.",
        proof: ["Exocortex Runtime", "Astrolabio Metamente", "Web Flagship", "Workpod Launcher", "Human-in-the-Loop", "MCP"],
        tags: ["Applied AI", "Agents", "Governance", "Architecture"],
        publicSafeNote: "Las capacidades se describen según evidencia de repositorio y con límites explícitos; no se presentan como producción ni validación de cliente.",
        sections: [
          { title: "Por qué existe", body: "TransformIA es donde la formación técnica se convierte en sistemas. Construir permite entender de primera mano qué funciona, qué falla, cómo se gobierna y qué necesita una organización para trasladarlo a trabajo real." },
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
      badge: "Available · Remote · Hybrid · On-site in Madrid", name: "Daniel Medina Sánchez",
      headline: "Project Manager. Before leading technology projects, I was already running businesses, teams, and results at scale.",
      body: "I led operations of 560+ people across four countries with P&L above €12M/year. At Ayesa, I transferred that experience into technology: Madrid Digital, Justice, and UOC as an AI Strategy Consultant, and now ICEX as a Project Manager.\n\nIn parallel, I have spent years building depth in technology and artificial intelligence. TransformIA is where that progression becomes working systems. My value is the ability to move between business, delivery, and technology without losing sight of any of them.",
      downloadCv: "Download CV", viewAyesa: "View Ayesa progression", contact: "Request interview", credentialsLabel: "CAREER", credentials: sharedCareer, primaryCvHref: cvRoutes.en,
      profile: { label: "Current profile", name: "Daniel Medina", role: "Project Manager · Technology Delivery · Applied AI", chips: ["Project Management", "Technology Delivery", "Applied AI"] },
      stats: [{ value: "15+", label: "years" }, { value: "560+", label: "people" }, { value: "4", label: "countries" }, { value: "€12M+", label: "P&L" }, { value: "Project Manager", label: "ICEX / Ayesa · present" }]
    },
    valueAreas: {
      eyebrow: "WHY I FIT PROJECT MANAGEMENT", title: "Management at scale + technology delivery + real depth in AI",
      body: "I did not reach Project Management through a course. I arrived after years of owning budgets, capacity, SLA, deviations, distributed teams, client relationships, and multiple service lines.\n\nAyesa turned that management discipline into technology delivery. TransformIA adds the layer that now differentiates my profile: I can move across business, project, and technology with informed judgment.",
      items: [
        { title: "Governance and delivery", body: "Planning, resources, milestones, risks, contingencies, reporting, and execution.", tags: ["Planning", "Resources", "RAID", "Reporting"] },
        { title: "Stakeholders and business", body: "Clients, budget, P&L, priorities, negotiation, and decision-making.", tags: ["Stakeholders", "P&L", "Negotiation", "Decisions"] },
        { title: "Technology and applied AI", body: "Digital Workplace, ITSM, Azure, agents, automation, and AI systems architecture.", tags: ["ITSM", "Azure", "Agents", "AI architecture"] }
      ]
    },
    proof: {
      eyebrow: "PROFESSIONAL TRACK RECORD", title: "Operations → Service Delivery → Business Management → Project Management",
      body: "The progression is continuous: I learned to sustain operations, then govern services and business at scale, and finally transferred that discipline into technology consulting and Project Management.",
      careerLabel: "Career progression",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operations · coordination" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · executive scale" },
        { period: "2025–present", title: "Ayesa", detail: "Technology Consulting → Project Management" }
      ],
      ayesa: {
        eyebrow: "AYESA · TECHNOLOGY CONSULTING → PROJECT MANAGEMENT", title: "From strategic consulting to Project Manager at ICEX", period: "Aug 2025 · present",
        items: [
          { period: "2025", client: "Madrid Digital", role: "AI Strategy & Digital Workplace Consultant", detail: "Strategy · roadmaps · workplace modernization · executive documentation" },
          { period: "2025", client: "Justice", role: "AI Strategy Consultant", detail: "Functional analysis · process transformation · public administration" },
          { period: "2025", client: "UOC", role: "AI Strategy Consultant", detail: "Use cases · knowledge/CRM · Salesforce · functional analysis" },
          { period: "2026 → PRESENT", client: "ICEX", role: "PROJECT MANAGER", detail: "30+ people · planning · tracking · deliverables · contingencies · stakeholders · Jira/JSM · Microsoft 365 · Power BI" }
        ],
        supporting: "Ayesa was the bridge between my executive experience and technology. I joined in strategic consulting and progressively took on greater delivery responsibility until moving into Project Management at ICEX. That was not when I started managing; it was when I transferred years of complex operations management into technology.",
        cta: "View Ayesa case", slug: "ayesa-digital-workplace-sector-publico-icex"
      }
    },
    konecta: {
      eyebrow: "KONECTA · EXECUTIVE SCALE", title: "Before technology Project Management, I was already managing complexity at scale.",
      body: "As Business Manager, I governed SLA/KPI, capacity, billing, margin, quality, continuity, deviations, and executive client relationships. Today, that experience translates directly into resource planning, financial governance, risk/issues, stakeholders, and multi-workstream delivery.",
      metrics: [{ value: "560+", label: "people" }, { value: "4", label: "countries" }, { value: ">€12M", label: "annual P&L" }, { value: "8", label: "service lines" }],
      details: ["SLA/KPI, capacity, and quality", "Billing, margin, and deviations", "Continuity, escalations, and corrective plans", "Executive relationship with a strategic client"],
      cta: "View Konecta case", slug: "konecta-operaciones-escala-seguros"
    },
    lab: {
      eyebrow: "TECHNOLOGY IN PARALLEL · PROOF OF WORK", title: "TransformIA: I do not study AI from the outside. I build it.",
      body: "My relationship with technology started long before generative AI. I grew up taking apart and building computers with my father, from Spectrum and 386/486 PCs to my own Pentium III.\n\nFrom 2020/2021, I began studying artificial intelligence deliberately. Machine Learning, Computer Science, Python, CS50x, CS50AI, Azure, and agents followed.\n\nTransformIA is where that learning becomes systems. I design and build products, runtimes, and applied-AI architectures to understand first-hand what works, what fails, how it should be governed, and how it can create value in business.",
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
      eyebrow: "TECHNICAL JOURNEY", title: "From building computers to building AI systems",
      body: "Computing was always there. For years, my professional career grew through operations and business while I continued learning technology in parallel. From 2020/2021, that second track became deliberate: AI, Machine Learning, Computer Science, Python, then Azure and agent architecture.\n\nToday, the two tracks converge. Executive experience helps me understand what an organization needs; technical depth lets me work directly with the people who have to build it.",
      timeline: ["Spectrum / 386 / 486 / Pentium", "AI · 2020/21", "ML & AI · 2023", "CS50x", "CS50AI", "Azure / Foundry", "TransformIA"]
    },
    conciergeSection: {
      eyebrow: "PROFESSIONAL FIT", title: "Direct answers for recruiters and hiring managers",
      body: "An interactive guide based only on public portfolio information. It summarizes experience, scale, and technical grounding without sending messages or taking action.", badge: "Public information · human review"
    },
    credentialsSection: {
      eyebrow: "EDUCATION & CREDENTIALS", title: "Technical depth and delivery discipline",
      body: "Credentials that strengthen an established management career: Computer Science and AI foundations, iterative delivery, and continuous learning in Azure and agent architecture.",
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
    casePage: { back: "Back to experience", role: "Role", sector: "Scope", boundary: "Public boundary", evidence: "Key evidence", nextStep: "Next step", nextStepBody: "Download the CV or return to experience to review the full professional progression." },
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
        publicSector: { content: "At Ayesa, he worked across Madrid Digital, Justice, and UOC before progressing into a Project Manager role at ICEX, coordinating a 30+ person perimeter.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Ayesa", "ICEX", "30+ people", "Jira/JSM"] },
        technical: { content: "His technical grounding combines CS50x, CS50AI, Machine Learning, Python, Azure, and hands-on systems work through TransformIA. Technology is a parallel, demonstrable track.", confidence: "high", fitScore: 94, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["CS50x", "CS50AI", "Azure", "TransformIA"] },
        hitl: { content: "TransformIA systems use policy, evidence, and human review as governance boundaries. The portfolio does not present this work as production.", confidence: "high", fitScore: 91, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "The primary fit is Project Manager or Technical PM in Technology Delivery, digital transformation, and applied-AI contexts. He brings prior executive management and informed technical judgment.", confidence: "high", fitScore: 97, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Project Manager", "Technology Delivery", "Applied AI"] },
        fallback: { content: "Daniel is a Project Manager with executive delivery experience and real technical grounding in applied AI. Ask about Ayesa, Konecta, stakeholders, or TransformIA for specifics.", confidence: "medium", fitScore: 88, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: from technology consulting to Project Manager at ICEX", eyebrow: "TECHNOLOGY CONSULTING → PROJECT MANAGEMENT", role: "Project Manager",
        sector: "Public sector · Digital Workplace · ITSM · technology transformation", summary: "Progression from AI strategic consulting across Madrid Digital, Justice, and UOC into Project Management at ICEX.",
        proof: ["Madrid Digital", "Justice", "UOC", "ICEX", "30+ people", "Jira/JSM", "Microsoft 365", "Power BI"], tags: ["Project Management", "Technology Delivery", "Public Sector", "ITSM"],
        publicSafeNote: "Professional description with no internal documentation, client data, or confidential information.",
        sections: [
          { title: "Progression", body: ["In 2025, I worked as an AI Strategy & Digital Workplace Consultant at Madrid Digital, focused on strategy, roadmaps, modernization, and executive documentation.", "I then contributed to Justice through functional analysis and process transformation in public administration, and to UOC through use cases, knowledge/CRM, Salesforce, and functional analysis.", "Since 2026, I have been a Project Manager at ICEX. I coordinate a 30+ person perimeter and work across planning, tracking, deliverables, contingencies, stakeholders, and reporting with Microsoft 365, Jira/JSM, and Power BI."] },
          { title: "What it proves", body: "Ayesa transferred an established management discipline into technology: structuring work, coordinating people, anticipating issues, maintaining executive focus, and moving deliverables forward." }
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
        slug: "transformia-proof-of-work", title: "TransformIA: applied-AI systems as proof of work", eyebrow: "TECHNOLOGY IN PARALLEL", role: "Design and construction of own systems", sector: "Runtimes, agents, governance, web product, and activation", summary: "Years of technical learning turned into applied-AI products, runtimes, and architectures.",
        proof: ["Exocortex Runtime", "Astrolabio Metamente", "Web Flagship", "Workpod Launcher", "Human-in-the-Loop", "MCP"], tags: ["Applied AI", "Agents", "Governance", "Architecture"],
        publicSafeNote: "Capabilities are described from repository evidence with explicit boundaries; they are not presented as production or customer validation.",
        sections: [
          { title: "Why it exists", body: "TransformIA is where technical learning becomes systems. Building reveals first-hand what works, what fails, how it should be governed, and what an organization needs to move it into real work." },
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
