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

const sharedCareer = ["SAP S/4HANA Cloud", "SAP Generative AI", "HarvardX CS50x", "CS50AI", "SMPC®", "MBA"] as const;

export const portfolioContent = {
  es: {
    metadata: {
      title: "Daniel Medina Sánchez | SAP Implementation · Generative AI · Technology Delivery",
      description:
        "Consultor SAP certificado en S/4HANA Cloud Public Edition y SAP Generative AI, con 15+ años de liderazgo, Project Management, 560+ personas, 4 países y P&L >12M€.",
      openGraphLocale: "es_ES"
    },
    nav: {
      identityName: "Daniel Medina",
      identityRole: "SAP Implementation · Business AI · Delivery",
      homeAria: "Inicio de Daniel Medina Sánchez",
      links: [
        { href: "/#credentials", label: "Certificaciones" },
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
        "Consultor SAP y Project Manager con experiencia ejecutiva en operaciones y delivery, dos certificaciones SAP prácticas y profundidad técnica demostrable en IA aplicada. Casos redactados sin datos confidenciales ni documentación interna.",
      links: { privacy: "Privacidad", assets: "Activos", designSystem: "Sistema visual", github: "GitHub" }
    },
    hero: {
      badge: "SAP CERTIFIED · IMPLEMENTATION · GENERATIVE AI · DELIVERY",
      name: "Daniel Medina Sánchez",
      headline:
        "Conecto la implementación SAP, la IA generativa y el delivery con 15+ años de liderazgo real.",
      body:
        "En Ayesa he evolucionado desde consultoría, Digital Workplace y Project Management hacia un proyecto SAP. Esa transición se apoya en dos certificaciones prácticas consecutivas: SAP S/4HANA Cloud Public Edition Implementation Consultant (85 %) y SAP Generative AI Developer (100 %).\n\nAporto más de 15 años dirigiendo equipos, clientes, operaciones y resultados —hasta 560+ personas, cuatro países y P&L superior a 12 M€/año— y los traduzco hoy en implementación, gobierno, stakeholders y ejecución tecnológica.",
      downloadCv: "Descargar CV",
      viewAyesa: "Ver evolución SAP en Ayesa",
      contact: "Solicitar entrevista",
      credentialsLabel: "CREDENTIAL STACK",
      credentials: sharedCareer,
      primaryCvHref: cvRoutes.es,
      profile: {
        label: "Perfil actual",
        name: "Daniel Medina",
        role: "SAP Implementation & Generative AI Consultant",
        chips: ["S/4HANA Cloud", "SAP Business AI", "Technology Delivery"]
      },
      stats: [
        { value: "15+", label: "años" },
        { value: "560+", label: "personas" },
        { value: "4", label: "países" },
        { value: "€12M+", label: "P&L" },
        { value: "2× SAP", label: "certificaciones · 85 % / 100 %" }
      ]
    },
    valueAreas: {
      eyebrow: "SAP · BUSINESS AI · DELIVERY",
      title: "Implementación SAP con criterio ejecutivo y profundidad técnica",
      body:
        "Combino la ontología y la práctica de SAP con una base de gestión poco habitual: objetivos, personas, recursos, riesgos, stakeholders, tecnología y resultado de negocio. La experiencia en operaciones de gran escala aporta disciplina de ejecución; la formación técnica permite trabajar de tú a tú con equipos funcionales y técnicos.",
      items: [
        {
          title: "SAP IMPLEMENTATION",
          body: "S/4HANA Cloud Public Edition · Central Business Configuration · scoping · configuración · migración · testing",
          tags: ["S/4HANA Cloud", "CBC", "Migración", "Testing"]
        },
        {
          title: "SAP BUSINESS AI",
          body: "AI Launchpad · Generative AI Hub · Prompt Editor · JSON estructurado · hardening · comparación de modelos",
          tags: ["AI Launchpad", "Generative AI Hub", "Prompts", "Modelos"]
        },
        {
          title: "DELIVERY & GOVERNANCE",
          body: "Planificación · hitos · recursos · RAID · dependencias · stakeholders · reporting ejecutivo · adopción",
          tags: ["Project Management", "RAID", "Stakeholders", "Adopción"]
        }
      ]
    },
    proof: {
      eyebrow: "EXPERIENCIA",
      title: "De la escala ejecutiva a la implementación SAP",
      body:
        "Actualmente trabajo en un proyecto SAP dentro de Ayesa, tras una progresión que abarca operaciones, Service Delivery, Business Management, consultoría, Project Management y transformación tecnológica.",
      careerLabel: "Experiencia acumulada",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operaciones · coordinación" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · escala ejecutiva" },
        { period: "2025–actualidad", title: "Ayesa", detail: "Consulting → PM → SAP" }
      ],
      ayesa: {
        eyebrow: "AYESA · TECHNOLOGY CONSULTING · PROJECT MANAGEMENT · SAP",
        title: "Evolución interna hacia implementación SAP y Business AI",
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
            period: "2026",
            client: "ICEX",
            role: "PROJECT MANAGER",
            detail:
              "30+ personas · planificación · seguimiento · entregables · contingencias · stakeholders · Jira/JSM · Microsoft 365 · Power BI"
          },
          {
            period: "2026 → ACTUALIDAD",
            client: "Proyecto SAP",
            role: "IMPLEMENTATION & BUSINESS AI",
            detail:
              "SAP S/4HANA Cloud Public Edition · CBC · usuarios/roles · migración · testing · AI Launchpad · Generative AI Hub"
          }
        ],
        supporting:
          "Mi recorrido en Ayesa conecta consultoría estratégica, Digital Workplace, Project Management y SAP. Tras ICEX y los proyectos de Madrid Digital, Justicia y UOC, la evolución al proyecto SAP se ha acelerado con práctica real en sistemas y dos certificaciones oficiales obtenidas de forma consecutiva.",
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
      title: "Profundidad técnica para dirigir mejor",
      body:
        "Trabajo con SAP S/4HANA Cloud Public Edition, Central Business Configuration, SAP AI Launchpad, Generative AI Hub, Microsoft 365, Jira/JSM, Salesforce, Azure, Python, SQL, APIs, Git/GitHub y Power BI. Esta profundidad no sustituye la función de delivery: permite comprender la implementación, cuestionar decisiones y conectar negocio, funcional y técnico.\n\nLa informática forma parte de mi vida desde niño. Desde 2020/2021 profundicé deliberadamente en IA, Machine Learning, Computer Science y software; en 2026 esa trayectoria converge con SAP mediante dos certificaciones prácticas y la evolución del proyecto en Ayesa.",
      capabilities: [
        { title: "SAP IMPLEMENTATION", items: ["S/4HANA Cloud", "CBC", "Scoping", "Configuración", "Migración", "Testing"] },
        { title: "SAP BUSINESS AI", items: ["AI Launchpad", "Generative AI Hub", "Prompt Editor", "JSON", "Model comparison"] },
        { title: "PROJECT & SERVICE", items: ["Project Management", "Jira/JSM", "ITSM", "Digital Workplace", "Power BI"] },
        { title: "SOFTWARE & DATA", items: ["Python", "C", "R", "SQL", "JavaScript / TypeScript", "React / Next.js", "APIs", "Git / GitHub"] },
        { title: "APPLIED AI", items: ["Agentes", "RAG / Search", "MCP", "Human-in-the-Loop", "AI governance", "Policy / evidence", "Azure"] }
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
      eyebrow: "CERTIFICACIONES EN PRIMER PLANO",
      title: "Dos SAP, dos Harvard, Scrum y MBA: una base completa",
      badge: "2 certificaciones SAP · 85 % + 100 %",
      assessmentBadge: "Assessment práctico",
      body:
        "Las dos certificaciones SAP validan ejecución práctica en implementación cloud y Business AI. HarvardX aporta fundamento informático, SMPC® disciplina Agile y el MBA una lectura directiva de negocio.",
      items: [
        { title: "SAP S/4HANA Cloud Public Edition", subtitle: "Implementation Consultant · C_S4CPB_2602 · 85 %", body: "Assessment práctico. CBC, scoping, estructuras organizativas, configuración, autorizaciones, migración y testing. Obtenida el 30 ago. 2026." },
        { title: "SAP Generative AI Developer", subtitle: "C_AIG_2604 · 100 %", body: "Assessment práctico. AI Launchpad, Generative AI Hub, Prompt Editor, salidas JSON, hardening y comparación de modelos. Obtenida el 1 sep. 2026." },
        { title: "HarvardX CS50x", subtitle: "Introduction to Computer Science", body: "Computer Science, Python, SQL, algoritmos y estructuras de datos." },
        { title: "HarvardX CS50AI", subtitle: "Introduction to Artificial Intelligence with Python", body: "Búsqueda, conocimiento, incertidumbre, optimización, machine learning, redes neuronales y lenguaje." },
        { title: "CertiProf SMPC®", subtitle: "Scrum Master Professional Certification", body: "Scrum, facilitación de equipos, trabajo iterativo, gestión de impedimentos y mejora continua." },
        { title: "MBA · ENEB", subtitle: "Business Administration and Management · 9,58/10", body: "Estrategia, finanzas, operaciones, personas y dirección de negocio." }
      ]
    },
    cvHub: {
      eyebrow: "CV",
      title: "Una identidad profesional. Dos idiomas.",
      body:
        "Consultor SAP y Project Manager con dos certificaciones SAP prácticas, experiencia ejecutiva en operaciones y delivery, y profundidad técnica en IA aplicada.",
      downloadPdf: "Descargar PDF",
      files: [
        { id: "es", href: cvRoutes.es, label: "Descargar CV Español", shortLabel: "CV Español", language: "Español", audience: "SAP Implementation · SAP Business AI · Technology Delivery · Project Management" },
        { id: "en", href: cvRoutes.en, label: "Download English CV", shortLabel: "CV English", language: "English", audience: "SAP Implementation · SAP Business AI · Technology Delivery · Project Management" }
      ]
    },
    contact: {
      eyebrow: "CONTACTO PROFESIONAL",
      title: "Si necesitas conectar SAP, negocio, delivery e IA aplicada, hablemos.",
      body:
        "Busco posiciones de SAP Consultant, SAP Project Manager, SAP Business AI, Technical PM y Technology Delivery. Preferencia por remoto, con apertura a híbrido o presencial en Madrid cuando el proyecto lo justifica.",
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
      initialMessage: "Pregunta por SAP, certificaciones, experiencia, Project Management, Ayesa, Konecta o base técnica. Responderé solo con información pública de esta web.",
      suggestedQuestions: ["¿Qué experiencia SAP tiene?", "¿Qué certificaciones ha obtenido?", "¿Qué escala ha gestionado?", "¿Cuál es su encaje profesional?"],
      inputPlaceholder: "Escribe una pregunta", sendLabel: "Enviar", roleFit: "Encaje orientativo", fitScoreSuffix: "/100", confidence: "Confianza", pending: "pendiente",
      recommendedCv: "CV recomendado", askFirst: "Haz una pregunta", download: "Descargar CV", approvalStatus: "Contacto", requestInterview: "Solicitar entrevista",
      approvalDefault: "La solicitud abre el canal de contacto; Daniel decide y responde personalmente.", pendingApproval: "Solicitud preparada. Utiliza el enlace de contacto para enviarla.",
      answers: {
        sap: { content: "Actualmente trabaja en un proyecto SAP dentro de Ayesa y ha validado la transición con dos assessments prácticos consecutivos: SAP S/4HANA Cloud Public Edition Implementation Consultant (85 %) y SAP Generative AI Developer (100 %). Combina configuración e implementación cloud con SAP Business AI y experiencia senior de delivery.", confidence: "high", fitScore: 98, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["S/4HANA Cloud", "C_S4CPB_2602 · 85 %", "C_AIG_2604 · 100 %", "Ayesa"] },
        operations: { content: "La experiencia operativa prueba seniority: 560+ personas, 4 países, P&L superior a 12 M€ y 8 líneas de servicio. Esa escala se traduce en presupuesto, recursos, riesgos, stakeholders y delivery multistream.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["560+ personas", "4 países", ">12M€ P&L", "8 líneas"] },
        publicSector: { content: "En Ayesa ha pasado por Madrid Digital, Justicia, UOC e ICEX, donde coordinó un perímetro de 30+ personas, antes de evolucionar al proyecto SAP actual.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Ayesa", "ICEX", "30+ personas", "Proyecto SAP"] },
        technical: { content: "Su base técnica combina SAP S/4HANA Cloud, SAP Business AI, CS50x, CS50AI, Machine Learning, Python, Azure y construcción de sistemas en TransformIA.", confidence: "high", fitScore: 96, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["SAP", "CS50x", "CS50AI", "TransformIA"] },
        hitl: { content: "Los sistemas de TransformIA mantienen políticas, evidencia y revisión humana como límites de gobierno. El portfolio no presenta esa implementación como producción.", confidence: "high", fitScore: 91, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "El encaje principal es SAP Consultant, SAP Project Manager, SAP Business AI o Technical PM. Aporta dos certificaciones SAP prácticas, gestión ejecutiva previa y criterio técnico propio.", confidence: "high", fitScore: 98, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["SAP Consultant", "SAP Business AI", "Project Manager"] },
        fallback: { content: "Daniel es consultor SAP y Project Manager con experiencia ejecutiva en delivery, dos certificaciones SAP prácticas y una base técnica real en IA aplicada.", confidence: "medium", fitScore: 92, cvHref: cvRoutes.es, cvLabel: "CV Español", evidence: ["SAP", "Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: evolución de consultoría y Project Management hacia SAP", eyebrow: "SAP · PROJECT MANAGEMENT · TECHNOLOGY CONSULTING",
        role: "SAP Implementation & Business AI · Project Manager", sector: "SAP S/4HANA Cloud Public Edition · SAP Business AI · Technology Delivery",
        summary: "Evolución interna desde Madrid Digital, Justicia, UOC e ICEX hacia un proyecto SAP, respaldada por dos certificaciones prácticas consecutivas.",
        proof: ["Proyecto SAP", "C_S4CPB_2602 · 85 %", "C_AIG_2604 · 100 %", "ICEX", "30+ personas", "SAP Business AI"],
        tags: ["SAP S/4HANA Cloud", "SAP Business AI", "Project Management", "Technology Delivery"],
        publicSafeNote: "Descripción profesional sin documentación interna, datos de cliente ni información confidencial.",
        sections: [
          { title: "Evolución actual", body: ["Actualmente trabajo en un proyecto SAP, con foco en SAP S/4HANA Cloud Public Edition y SAP Business AI. La transición se ha reforzado con práctica en sistemas y dos certificaciones oficiales obtenidas de forma consecutiva.", "La trayectoria previa en Ayesa incluye Project Management en ICEX sobre un perímetro de 30+ personas y consultoría para Madrid Digital, Justicia y UOC."] },
          { title: "Qué demuestra", body: "La evolución combina implementación SAP, Project Management, coordinación de personas, gestión de stakeholders, foco ejecutivo y profundidad técnica en IA generativa." }
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
      title: "Daniel Medina Sánchez | SAP Implementation · Generative AI · Technology Delivery",
      description:
        "SAP-certified consultant in S/4HANA Cloud Public Edition and SAP Generative AI, with 15+ years of leadership, Project Management, 560+ people across 4 countries, and P&L above €12M.",
      openGraphLocale: "en_GB"
    },
    nav: {
      identityName: "Daniel Medina", identityRole: "SAP Implementation · Business AI · Delivery", homeAria: "Daniel Medina Sánchez home",
      links: [{ href: "/#credentials", label: "Certifications" }, { href: "/#experience", label: "Experience" }, { href: "/#lab", label: "TransformIA" }, { href: "/#cv", label: "CV" }, { href: "/#contact", label: "Contact" }],
      bookInterview: "Request interview", cv: "CV"
    },
    footer: {
      body: "SAP consultant and Project Manager with executive-scale operations and delivery experience, two practical SAP certifications, and demonstrable technical depth in applied AI. Cases exclude confidential data and internal documentation.",
      links: { privacy: "Privacy", assets: "Assets", designSystem: "Design system", github: "GitHub" }
    },
    hero: {
      badge: "SAP CERTIFIED · IMPLEMENTATION · GENERATIVE AI · DELIVERY", name: "Daniel Medina Sánchez",
      headline: "I connect SAP implementation, generative AI, and delivery with 15+ years of proven leadership.",
      body: "At Ayesa, I have progressed from consulting, Digital Workplace, and Project Management into an SAP project. That transition is backed by two consecutive practical certifications: SAP S/4HANA Cloud Public Edition Implementation Consultant (85%) and SAP Generative AI Developer (100%).\n\nI bring 15+ years leading teams, clients, operations, and business outcomes — up to 560+ people across four countries and P&L above €12M/year — and apply that experience to implementation, governance, stakeholders, and technology execution.",
      downloadCv: "Download CV", viewAyesa: "View SAP progression at Ayesa", contact: "Request interview", credentialsLabel: "CREDENTIAL STACK", credentials: sharedCareer, primaryCvHref: cvRoutes.en,
      profile: { label: "Current profile", name: "Daniel Medina", role: "SAP Implementation & Generative AI Consultant", chips: ["S/4HANA Cloud", "SAP Business AI", "Technology Delivery"] },
      stats: [{ value: "15+", label: "years" }, { value: "560+", label: "people" }, { value: "4", label: "countries" }, { value: "€12M+", label: "P&L" }, { value: "2× SAP", label: "certifications · 85% / 100%" }]
    },
    valueAreas: {
      eyebrow: "SAP · BUSINESS AI · DELIVERY", title: "SAP implementation with executive judgment and technical depth",
      body: "I combine SAP ontology and hands-on practice with an uncommon management foundation: objectives, people, resources, risks, stakeholders, technology, and business outcomes. Large-scale operations bring execution discipline; technical training supports direct work across functional and engineering teams.",
      items: [
        { title: "SAP IMPLEMENTATION", body: "S/4HANA Cloud Public Edition · Central Business Configuration · scoping · configuration · migration · testing", tags: ["S/4HANA Cloud", "CBC", "Migration", "Testing"] },
        { title: "SAP BUSINESS AI", body: "AI Launchpad · Generative AI Hub · Prompt Editor · structured JSON · hardening · model comparison", tags: ["AI Launchpad", "Generative AI Hub", "Prompts", "Models"] },
        { title: "DELIVERY & GOVERNANCE", body: "Planning · milestones · resources · RAID · dependencies · stakeholders · executive reporting · adoption", tags: ["Project Management", "RAID", "Stakeholders", "Adoption"] }
      ]
    },
    proof: {
      eyebrow: "EXPERIENCE", title: "From executive scale to SAP implementation",
      body: "I currently work on an SAP project within Ayesa, following a progression across operations, Service Delivery, Business Management, consulting, Project Management, and technology transformation.",
      careerLabel: "Experience at a glance",
      careerSteps: [
        { period: "2009–2016", title: "Transcom", detail: "Operations · coordination" },
        { period: "2016–2023", title: "Uniglobal", detail: "Service Delivery · Business Management" },
        { period: "2023–2025", title: "Konecta", detail: "Business Manager · executive scale" },
        { period: "2025–present", title: "Ayesa", detail: "Consulting → PM → SAP" }
      ],
      ayesa: {
        eyebrow: "AYESA · TECHNOLOGY CONSULTING · PROJECT MANAGEMENT · SAP", title: "Internal progression into SAP implementation and Business AI", period: "Aug 2025 · present",
        items: [
          { period: "2025", client: "Madrid Digital", role: "AI Strategy & Digital Workplace Consultant", detail: "Strategy · roadmaps · workplace modernization · executive documentation" },
          { period: "2025", client: "Justice", role: "AI Strategy Consultant", detail: "Functional analysis · process transformation · public administration" },
          { period: "2025", client: "UOC", role: "AI Strategy Consultant", detail: "Use cases · knowledge/CRM · Salesforce · functional analysis" },
          { period: "2026", client: "ICEX", role: "PROJECT MANAGER", detail: "30+ people · planning · tracking · deliverables · contingencies · stakeholders · Jira/JSM · Microsoft 365 · Power BI" },
          { period: "2026 → PRESENT", client: "SAP Project", role: "IMPLEMENTATION & BUSINESS AI", detail: "SAP S/4HANA Cloud Public Edition · CBC · users/roles · migration · testing · AI Launchpad · Generative AI Hub" }
        ],
        supporting: "My journey at Ayesa connects strategic consulting, Digital Workplace, Project Management, and SAP. Following ICEX and initiatives for Madrid Digital, Justice, and UOC, the move into the SAP project has accelerated through hands-on system practice and two consecutive official certifications.",
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
      eyebrow: "TECHNOLOGY IN PARALLEL", title: "Technical depth for stronger project leadership",
      body: "I work with SAP S/4HANA Cloud Public Edition, Central Business Configuration, SAP AI Launchpad, Generative AI Hub, Microsoft 365, Jira/JSM, Salesforce, Azure, Python, SQL, APIs, Git/GitHub, and Power BI. This depth supports delivery by connecting business, functional, and technical perspectives.\n\nComputing has been part of my life since childhood. Since 2020/2021, I have deliberately deepened my work in AI, Machine Learning, Computer Science, and software; in 2026, that track converged with SAP through two practical certifications and my progression at Ayesa.",
      capabilities: [
        { title: "SAP IMPLEMENTATION", items: ["S/4HANA Cloud", "CBC", "Scoping", "Configuration", "Migration", "Testing"] },
        { title: "SAP BUSINESS AI", items: ["AI Launchpad", "Generative AI Hub", "Prompt Editor", "JSON", "Model comparison"] },
        { title: "PROJECT & SERVICE", items: ["Project Management", "Jira/JSM", "ITSM", "Digital Workplace", "Power BI"] },
        { title: "SOFTWARE & DATA", items: ["Python", "C", "R", "SQL", "JavaScript / TypeScript", "React / Next.js", "APIs", "Git / GitHub"] },
        { title: "APPLIED AI", items: ["Agents", "RAG / Search", "MCP", "Human-in-the-Loop", "AI governance", "Policy / evidence", "Azure"] }
      ]
    },
    conciergeSection: {
      eyebrow: "PROFESSIONAL FIT", title: "Direct answers for recruiters and hiring managers",
      body: "An interactive guide based only on public portfolio information. It summarizes experience, scale, and technical grounding without sending messages or taking action.", badge: "Public information · human review"
    },
    credentialsSection: {
      eyebrow: "CERTIFICATIONS UP FRONT", title: "Two SAP, two Harvard, Scrum, and an MBA",
      badge: "2 SAP certifications · 85% + 100%",
      assessmentBadge: "System-based",
      body: "The two SAP credentials validate hands-on execution in cloud implementation and Business AI. HarvardX provides the computer-science foundation, SMPC® the Agile discipline, and the MBA an executive business perspective.",
      items: [
        { title: "SAP S/4HANA Cloud Public Edition", subtitle: "Implementation Consultant · C_S4CPB_2602 · 85%", body: "Practical assessment. CBC, scoping, organizational structures, configuration, authorizations, migration, and testing. Earned 30 Aug 2026." },
        { title: "SAP Generative AI Developer", subtitle: "C_AIG_2604 · 100%", body: "Practical assessment. AI Launchpad, Generative AI Hub, Prompt Editor, JSON output, hardening, and model comparison. Earned 1 Sep 2026." },
        { title: "HarvardX CS50x", subtitle: "Introduction to Computer Science", body: "Computer Science, Python, SQL, algorithms, and data structures." },
        { title: "HarvardX CS50AI", subtitle: "Introduction to Artificial Intelligence with Python", body: "Search, knowledge, uncertainty, optimization, machine learning, neural networks, and language." },
        { title: "CertiProf SMPC®", subtitle: "Scrum Master Professional Certification", body: "Scrum, team facilitation, iterative work, impediment management, and continuous improvement." },
        { title: "MBA · ENEB", subtitle: "Business Administration and Management · 9.58/10", body: "Strategy, finance, operations, people, and business leadership." }
      ]
    },
    cvHub: {
      eyebrow: "CV", title: "One professional identity. Two languages.",
      body: "SAP consultant and Project Manager with two practical SAP certifications, executive operations and delivery experience, and technical depth in applied AI.", downloadPdf: "Download PDF",
      files: [
        { id: "es", href: cvRoutes.es, label: "Descargar CV Español", shortLabel: "CV Español", language: "Spanish", audience: "SAP Implementation · SAP Business AI · Technology Delivery · Project Management" },
        { id: "en", href: cvRoutes.en, label: "Download English CV", shortLabel: "CV English", language: "English", audience: "SAP Implementation · SAP Business AI · Technology Delivery · Project Management" }
      ]
    },
    contact: {
      eyebrow: "PROFESSIONAL CONTACT", title: "If you need someone who can connect SAP, business, delivery, and applied AI, let's talk.",
      body: "I am targeting SAP Consultant, SAP Project Manager, SAP Business AI, Technical PM, and Technology Delivery roles. I prefer remote work, while remaining open to hybrid or on-site opportunities in Madrid when the project justifies it.",
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
      initialMessage: "Ask about SAP, certifications, experience, Project Management, Ayesa, Konecta, or technical depth. I will answer only from public information on this website.",
      suggestedQuestions: ["What SAP experience does he have?", "Which certifications has he earned?", "What scale has he managed?", "What roles is he suited for?"],
      inputPlaceholder: "Type a question", sendLabel: "Send", roleFit: "Indicative fit", fitScoreSuffix: "/100", confidence: "Confidence", pending: "pending", recommendedCv: "Recommended CV", askFirst: "Ask a question", download: "Download CV", approvalStatus: "Contact", requestInterview: "Request interview",
      approvalDefault: "The request opens the contact channel; Daniel decides and replies personally.", pendingApproval: "Request prepared. Use the contact link to send it.",
      answers: {
        sap: { content: "He currently works on an SAP project within Ayesa and has validated the transition through two consecutive practical assessments: SAP S/4HANA Cloud Public Edition Implementation Consultant (85%) and SAP Generative AI Developer (100%). He combines cloud implementation and configuration with SAP Business AI and senior delivery experience.", confidence: "high", fitScore: 98, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["S/4HANA Cloud", "C_S4CPB_2602 · 85%", "C_AIG_2604 · 100%", "Ayesa"] },
        operations: { content: "The operations background proves seniority: 560+ people, four countries, P&L above €12M, and eight service lines. That scale translates into budget, resources, risks, stakeholders, and multi-workstream delivery.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["560+ people", "4 countries", ">€12M P&L", "8 lines"] },
        publicSector: { content: "At Ayesa, he has worked across Madrid Digital, Justice, UOC, and ICEX — where he coordinated a 30+ person scope — before progressing into the current SAP project.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Ayesa", "ICEX", "30+ people", "SAP Project"] },
        technical: { content: "His technical grounding combines SAP S/4HANA Cloud, SAP Business AI, CS50x, CS50AI, Machine Learning, Python, Azure, and systems built through TransformIA.", confidence: "high", fitScore: 96, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["SAP", "CS50x", "CS50AI", "TransformIA"] },
        hitl: { content: "TransformIA systems use policy, evidence, and human review as governance boundaries. The portfolio does not present this work as production.", confidence: "high", fitScore: 91, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["Policy", "Evidence", "Human-in-the-Loop"] },
        ai: { content: "The primary fit is SAP Consultant, SAP Project Manager, SAP Business AI, or Technical PM. He brings two practical SAP certifications, prior executive management, and informed technical judgment.", confidence: "high", fitScore: 98, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["SAP Consultant", "SAP Business AI", "Project Manager"] },
        fallback: { content: "Daniel is an SAP consultant and Project Manager with executive delivery experience, two practical SAP certifications, and real technical grounding in applied AI.", confidence: "medium", fitScore: 92, cvHref: cvRoutes.en, cvLabel: "CV English", evidence: ["SAP", "Ayesa", "Konecta", "TransformIA"] }
      }
    },
    cases: [
      {
        slug: "ayesa-digital-workplace-sector-publico-icex", title: "Ayesa: progression from consulting and Project Management into SAP", eyebrow: "SAP · PROJECT MANAGEMENT · TECHNOLOGY CONSULTING", role: "SAP Implementation & Business AI · Project Manager",
        sector: "SAP S/4HANA Cloud Public Edition · SAP Business AI · Technology Delivery", summary: "Internal progression from Madrid Digital, Justice, UOC, and ICEX into an SAP project, backed by two consecutive practical certifications.",
        proof: ["SAP Project", "C_S4CPB_2602 · 85%", "C_AIG_2604 · 100%", "ICEX", "30+ people", "SAP Business AI"], tags: ["SAP S/4HANA Cloud", "SAP Business AI", "Project Management", "Technology Delivery"],
        publicSafeNote: "Professional description with no internal documentation, client data, or confidential information.",
        sections: [
          { title: "Current progression", body: ["I currently work on an SAP project focused on SAP S/4HANA Cloud Public Edition and SAP Business AI. The transition is reinforced by hands-on system practice and two official certifications earned consecutively.", "My earlier Ayesa journey includes Project Management at ICEX across a 30+ person scope and consulting work for Madrid Digital, Justice, and UOC."] },
          { title: "What it proves", body: "The progression combines SAP implementation, Project Management, team coordination, stakeholder leadership, executive focus, and technical depth in generative AI." }
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
