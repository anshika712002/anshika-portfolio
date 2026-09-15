export const profile = {
  name: 'Anshika Tyagi',
  firstName: 'Anshika',
  lastName: 'Tyagi',
  role: 'AI/ML Engineer',
  location: 'Noida, Uttar Pradesh',
  phone: '+91 74094 41561',
  phoneHref: '+917409441561',
  email: 'anshikatyagi712002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/atyagi7',
  linkedinLabel: 'linkedin.com/in/atyagi7',
  headline:
    'I build intelligent systems — real-world computer vision, conversational AI and production ML pipelines that ship.',
  intro: [
    'AI/ML Engineer with 2+ years of experience in Machine Learning, Deep Learning, Computer Vision and Generative AI. I design and build intelligent products end-to-end — from data collection and model training to evaluation and cloud deployment.',
  ],
  heroLeading: 'Computer Vision · Deep Learning · Generative AI · Conversational AI',
  heroStatus: 'Open to AI/ML engineering roles',
}

export const aboutParagraphs = [
  {
    heading: 'Experience applied to real problems',
    body: 'Across three engineering roles, I have shipped AI systems that are used in the real world — helmetless rider enforcement, electrical plan automation, virtual try-on, warehouse scanning, and a voice-first AI companion. Every system started as a data or model problem and ended as a deployed, measurable product.',
  },
  {
    heading: 'Full pipeline, not just models',
    body: 'I train and fine-tune models with PyTorch and TensorFlow, optimize them for inference, wrap them in FastAPI and Django REST APIs, and deploy them to AWS and Azure. I pair models with LLM orchestration, memory, guardrails and real-time voice pipelines to build complete AI applications.',
  },
  {
    heading: 'What drives me',
    body: 'I care about precision — whether that is taking symbol detection accuracy from 65% to 80%, cutting manual monitoring by 70%, or building guardrailed conversational systems people can trust. I combine engineering rigor with a focus on outcomes.',
  },
]

export type SkillGroup = {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    description: 'Core ML/AI methodologies and practices',
    skills: [
      'Deep Learning',
      'Computer Vision',
      'CNN',
      'Transfer Learning',
      'Model Training',
      'Fine-tuning',
      'Evaluation',
      'Optimization',
      'MLOps',
      'Data Preprocessing',
      'Data Annotation',
      'Inference Pipelines',
      'LLM Integration',
      'Generative AI',
      'Conversational AI',
      'Transformers',
    ],
  },
  {
    id: 'vision',
    title: 'Computer Vision & OCR',
    description: 'Detection, recognition and document understanding',
    skills: [
      'YOLOv8',
      'YOLOv11x-OBB',
      'EfficientNet-B0',
      'OpenCV',
      'PaddleOCR',
      'Tesseract OCR',
      'EasyOCR',
      'Image Processing',
      'Real-time Video Analytics',
      'MediaPipe',
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Libraries',
    description: 'Languages and scientific computing',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Pandas',
      'Librosa',
      'Pydub',
      'Google Colab',
      'Jupyter Notebook',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'AI backends and model deployment',
    skills: [
      'FastAPI',
      'Django',
      'Django REST Framework',
      'REST API Development',
      'WebSockets',
      'Async Programming',
      'Model Deployment',
      'Docker',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Databases',
    description: 'Infrastructure and persistence for AI systems',
    skills: [
      'AWS SageMaker',
      'AWS Lambda',
      'Amazon S3',
      'DynamoDB',
      'Azure Virtual Machines',
      'Google Vertex AI',
      'PostgreSQL',
      'pgvector',
      'Vector Databases',
      'SQLite',
      'pgAdmin',
    ],
  },
  {
    id: 'conversational',
    title: 'Conversational AI & Voice AI',
    description: 'LLM orchestration, memory, safety and voice',
    skills: [
      'OpenAI GPT-4o',
      'Parlant',
      'Mem0',
      'NeMo Guardrails',
      'Deepgram',
      'Cartesia',
      'Silero VAD',
      'Speech-to-Text',
      'Text-to-Speech',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'The day-to-day engineering stack',
    skills: ['GitLab', 'GitHub', 'Postman', 'Label Studio'],
  },
]

export type JobProject = {
  title: string
  summary: string
  achievements: string[]
  tech: string[]
  visual?: string
}

export type Job = {
  company: string
  companyLocation: string
  title: string
  period: string
  periodStart: string
  current?: boolean
  projects: JobProject[]
}

export const jobs: Job[] = [
  {
    company: 'Scala Code Global Pvt. Ltd.',
    companyLocation: 'Noida',
    title: 'AI/ML Engineer',
    period: '12/2025 – Present',
    periodStart: '2025-12',
    current: true,
    projects: [
      {
        title: 'PlanWise – Electrical Symbol Detection & Serverless Backend',
        summary:
          'AI-powered system that detects electrical symbols from uploaded plan PDFs/images to automate symbol recognition and plan analysis for electricians and contractors.',
        achievements: [
          'Trained a custom YOLOv11x-OBB model on AWS SageMaker, improving symbol detection accuracy from 65% to 80% on complex, rotated schematic elements.',
          'Led dataset collection and high-precision polygon annotation for multi-oriented electrical plan symbols to support OBB model training.',
          'Managed experimentation, evaluation and version control using SageMaker Studio.',
          'Architected a scalable serverless inference pipeline using AWS Lambda and the Serverless Framework.',
          'Integrated Amazon S3 and DynamoDB for high-throughput plan storage, automated metadata extraction and pipeline state management.',
        ],
        tech: ['Python', 'YOLOv11x-OBB', 'AWS SageMaker', 'AWS Lambda', 'Amazon S3', 'Amazon DynamoDB', 'Computer Vision'],
      },
      {
        title: 'Virtual Try-On Body Measurement Prediction System',
        summary:
          'Deep-learning system that predicts body measurements and detects clothing for virtual try-on applications.',
        achievements: [
          'Trained and fine-tuned a deep learning model on the BodyM dataset, achieving 85% accuracy for automated body measurement prediction.',
          'Built a high-precision clothing detection model using the Fashionpedia dataset and EfficientNet-B0, achieving 95% accuracy.',
          'Performed end-to-end dataset preprocessing — augmentation and alignment with MediaPipe — for high-quality model inputs.',
          'Deployed models into production via Django-based REST APIs for real-time inference.',
        ],
        tech: ['Python', 'Django', 'EfficientNet-B0', 'PyTorch', 'MediaPipe', 'REST APIs'],
      },
      {
        title: 'Spill – AI-Powered Emotional Support Companion',
        summary:
          'Voice-first AI companion with personalized conversations, persona-based interactions, contextual memory and real-time voice communication.',
        achievements: [
          'Developed asynchronous REST APIs and backend services with Python and FastAPI for sessions, conversations, memory and AI workflows.',
          'Built the AI conversation pipeline — LLM response generation, conversational AI orchestration, contextual retrieval and response processing.',
          'Integrated Parlant for structured conversational workflows, behavioral guidelines, persona interactions and safety rules.',
          'Implemented four AI personas — Listener, Reflector, Rational and Challenger — with dynamic persona switching.',
          'Integrated Mem0 and pgvector for contextual, cross-session memory of user preferences, history and recurring themes.',
          'Implemented NeMo Guardrails for prompt-injection detection, content safety, PII handling and response validation.',
          'Built real-time voice workflows with WebSockets, Deepgram STT, Silero VAD and Cartesia TTS for streaming audio and transcription.',
        ],
        tech: ['Python', 'FastAPI', 'WebSockets', 'OpenAI GPT-4o', 'Parlant', 'Mem0', 'pgvector', 'PostgreSQL', 'NeMo Guardrails', 'Deepgram', 'Cartesia', 'Silero VAD'],
      },
    ],
  },
  {
    company: 'Soft Vision Solutions Pvt. Ltd.',
    companyLocation: 'Noida',
    title: 'AI/ML Engineer',
    period: '04/2025 – 11/2025',
    periodStart: '2025-04',
    projects: [
      {
        title: 'AI Helmet Detection',
        summary:
          'AI system that automatically detects helmet-less riders, captures violations and extracts number plates for enforcement.',
        achievements: [
          'Fine-tuned YOLOv8 for real-time helmet detection, achieving 95% accuracy.',
          'Integrated EasyOCR and OpenCV to extract and process number plates at 85% recognition accuracy.',
          'Automated violation detection and evidence saving, reducing manual monitoring by 70%.',
        ],
        tech: ['YOLOv8', 'EasyOCR', 'OpenCV', 'NumPy', 'Python'],
      },
      {
        title: 'DJ Mixing App',
        summary:
          'Backend services for a DJ application supporting audio downloading, mixing and real-time playback.',
        achievements: [
          'Developed REST APIs for authentication, song requests and real-time audio mixing.',
          'Integrated YouTube API and yt-dlp for seamless audio downloading and mixing.',
          'Strengthened platform security with authentication, improving security by 25%.',
          'Collaborated with frontend teams to ensure smooth API consumption and real-time playback.',
        ],
        tech: ['Python', 'FastAPI', 'YouTube API', 'yt-dlp', 'REST API'],
      },
    ],
  },
  {
    company: 'Consult IT Pvt. Ltd.',
    companyLocation: 'Greater Noida',
    title: 'AI/ML Engineer',
    period: '04/2024 – 04/2025',
    periodStart: '2024-04',
    projects: [
      {
        title: 'Computer Vision Product Scanning & Warehouse Automation',
        summary:
          'Intelligent computer vision pipeline that automates product scanning, counting and quality checks in a warehouse environment.',
        achievements: [
          'Built an image processing workflow with OpenCV for QR code detection and product identification.',
          'Automated weight measurement and quantity counting with 90% accuracy, reducing manual errors by 35%.',
          'Developed a color recognition system to differentiate products with similar packaging.',
          'Implemented PDF report generation summarizing scanned product data for warehouse managers.',
          'Integrated Tesseract OCR for text extraction from packaging.',
        ],
        tech: ['OpenCV', 'Tesseract OCR', 'Python', 'NumPy', 'PDF Generation'],
      },
    ],
  },
]

export const projects = [
  {
    id: 'planwise',
    name: 'PlanWise',
    tagline: 'Electrical Symbol Detection & Serverless Backend',
    problem:
      'Electricians and contractors manually reviewed complex, rotated electrical plan symbols — a slow, error-prone process.',
    contribution:
      'Owned the full pipeline: polygon dataset annotation, custom YOLOv11x-OBB training on SageMaker, and a serverless inference architecture.',
    achievement: 'Pushed symbol detection accuracy from 65% to 80% on complex rotated schematics.',
    highlight: '+15% detection accuracy',
    metrics: [
      { label: 'Symbol detection accuracy', value: '80%' },
      { label: 'Detection gain', value: '65% → 80%' },
    ],
    tech: ['Python', 'YOLOv11x-OBB', 'AWS SageMaker', 'AWS Lambda', 'Amazon S3', 'DynamoDB'],
    visual: 'planwise',
    accent: '#22d3ee',
  },
  {
    id: 'tryon',
    name: 'Virtual Try-On',
    tagline: 'Body Measurement Prediction System',
    problem:
      'Virtual try-on needs reliable body measurements and garment detection from ordinary photos before a fit can be simulated.',
    contribution:
      'Trained and fine-tuned deep learning models end-to-end — BodyM measurement regression plus an EfficientNet-B0 clothing detector.',
    achievement: '95% clothing detection accuracy feeding a production Django REST API.',
    highlight: '85% / 95% accuracy',
    metrics: [
      { label: 'Body measurement accuracy', value: '85%' },
      { label: 'Clothing detection accuracy', value: '95%' },
    ],
    tech: ['Python', 'PyTorch', 'EfficientNet-B0', 'Django', 'MediaPipe', 'REST APIs'],
    visual: 'tryon',
    accent: '#a78bfa',
  },
  {
    id: 'spill',
    name: 'Spill',
    tagline: 'AI-Powered Emotional Support Companion',
    problem:
      'Supportive conversations need a voice-first AI that remembers context, stays safe and adapts its persona to the user.',
    contribution:
      'Built the backend and AI systems: FastAPI services, LLM pipeline, guardrails, cross-session memory and real-time voice.',
    achievement: 'Four personas, guardrailed, memory-backed, with real-time STT/TTS voice loops.',
    highlight: '4 personas · voice · guardrails',
    metrics: [
      { label: 'AI personas', value: '4' },
      { label: 'Voice loop', value: 'Real-time' },
    ],
    tech: ['Python', 'FastAPI', 'GPT-4o', 'Parlant', 'Mem0', 'pgvector', 'NeMo Guardrails', 'Deepgram', 'Cartesia'],
    visual: 'spill',
    accent: '#4ade80',
  },
  {
    id: 'helmet',
    name: 'AI Helmet Detection',
    tagline: 'Real-Time Rider Enforcement',
    problem:
      'Manually monitoring traffic feeds for helmet-less riders did not scale and missed violations.',
    contribution:
      'Fine-tuned YOLOv8 for detection and wired EasyOCR + OpenCV for automatic plate extraction and evidence capture.',
    achievement: 'Reduced manual monitoring effort by 70% with automated violation saving.',
    highlight: '-70% manual monitoring',
    metrics: [
      { label: 'Helmet detection accuracy', value: '95%' },
      { label: 'Plate recognition accuracy', value: '85%' },
      { label: 'Manual monitoring saved', value: '70%' },
    ],
    tech: ['Python', 'YOLOv8', 'EasyOCR', 'OpenCV', 'NumPy'],
    visual: 'helmet',
    accent: '#f59e0b',
  },
  {
    id: 'dj',
    name: 'DJ Mixing App',
    tagline: 'Audio Backend for Real-Time Mixing',
    problem:
      'A DJ application needed reliable audio downloading, mixing flows and real-time playback backed by secure APIs.',
    contribution: 'Built the backend: auth, song requests, mixing workflows and YouTube/yt-dlp audio ingestion.',
    achievement: 'Strengthened authentication, improving overall security by 25%.',
    highlight: '+25% security',
    metrics: [
      { label: 'Security improvement', value: '25%' },
    ],
    tech: ['Python', 'FastAPI', 'YouTube API', 'yt-dlp', 'REST API'],
    visual: 'dj',
    accent: '#f472b6',
  },
  {
    id: 'warehouse',
    name: 'Warehouse Automation',
    tagline: 'Computer Vision Product Scanning',
    problem:
      'Manual product scanning at warehouses mixed up similar packaging and introduced counting errors.',
    contribution:
      'Built an OpenCV pipeline — QR detection, color recognition, OCR reading and automated PDF reporting.',
    achievement: '90% accuracy on weight and quantity counting with 35% fewer manual errors.',
    highlight: '-35% manual errors',
    metrics: [
      { label: 'Weight/count accuracy', value: '90%' },
      { label: 'Manual errors reduced', value: '35%' },
    ],
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'NumPy', 'PDF Generation'],
    visual: 'warehouse',
    accent: '#60a5fa',
  },
]

export const expertise = [
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Object detection, OBB detection, image processing and real-time video analytics with YOLO, OpenCV and EfficientNet.',
    tags: ['YOLOv8', 'YOLOv11x-OBB', 'OpenCV', 'EfficientNet-B0'],
    icon: 'scan',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description: 'Training, fine-tuning and optimizing CNN-based models in PyTorch and TensorFlow for real-world accuracy targets.',
    tags: ['PyTorch', 'TensorFlow', 'Transfer Learning'],
    icon: 'brain',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'LLM-driven response generation and orchestration for production applications with structured behavioral control.',
    tags: ['GPT-4o', 'LLM Integration', 'Parlant'],
    icon: 'sparkles',
  },
  {
    id: 'conversational-ai',
    title: 'Conversational AI',
    description: 'Persona-based conversational agents with orchestration, dynamic switching and structured conversational workflows.',
    tags: ['Personas', 'Orchestration', 'Conversation Pipelines'],
    icon: 'message',
  },
  {
    id: 'llm-integration',
    title: 'LLM Integration',
    description: 'Connecting large language models into fast, secure backends — from API design to prompt and response pipelines.',
    tags: ['FastAPI', 'OpenAI', 'REST APIs'],
    icon: 'plug',
  },
  {
    id: 'ocr',
    title: 'OCR & Document AI',
    description: 'Text and plate extraction at scale using PaddleOCR, Tesseract and EasyOCR inside vision pipelines.',
    tags: ['PaddleOCR', 'Tesseract', 'EasyOCR'],
    icon: 'file',
  },
  {
    id: 'model-deployment',
    title: 'Model Deployment',
    description: 'Shipping trained models as services — serverless inference, containerized APIs and production monitoring.',
    tags: ['AWS Lambda', 'Docker', 'REST APIs'],
    icon: 'server',
  },
  {
    id: 'cloud-ai',
    title: 'Cloud AI',
    description: 'Building AI systems on AWS and Azure — SageMaker experimentation, storage, databases and VM infrastructure.',
    tags: ['AWS SageMaker', 'AWS Lambda', 'S3', 'DynamoDB', 'Azure'],
    icon: 'cloud',
  },
  {
    id: 'voice-ai',
    title: 'Voice AI',
    description: 'Real-time speech-to-text, voice-activity detection and text-to-speech pipelines for voice-first experiences.',
    tags: ['Deepgram', 'Silero VAD', 'Cartesia'],
    icon: 'mic',
  },
]

export const education = [
  {
    degree: 'MCA — Master of Computer Applications',
    school: 'Dr. A.P.J. Abdul Kalam Technical University',
    period: '2022 – 2024',
    focus: 'Advanced computing, software systems and applied machine learning.',
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    school: 'Chaudhary Charan Singh University',
    period: '2019 – 2022',
    focus: 'Computer applications, programming fundamentals and information systems.',
  },
]

export const certifications = [
  {
    title: 'Python Programming',
    issuer: 'Ministry of Electronics & Information Technology, Government of India (NASSCOM)',
    year: 'Certified',
  },
]

export const softSkills = ['Collaboration', 'Problem Solving', 'Continuous Learning']

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]