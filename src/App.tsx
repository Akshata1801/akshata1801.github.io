import heroImg from "@/assets/hero-cv.jpg";
import projUnet from "@/assets/proj-unet.jpg";
import projCarla from "@/assets/proj-carla.jpg";
import projLidar from "@/assets/proj-lidar.jpg";
import projVit from "@/assets/proj-vit.jpg";
import projSegm from "@/assets/proj-segm.jpg";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowRight,
  Cpu, Eye, Cog, Layers, ImageIcon, Code2, Brain, Boxes, GitBranch,
} from "lucide-react";

const RESUME = `${import.meta.env.BASE_URL}Akshata_Pore_Resume.pdf`;

const skills = {
  Languages: ["C++", "Python", "MATLAB"],
  "ML / DL": ["PyTorch", "TensorFlow", "Keras", "OpenCV", "PCL", "scikit-learn"],
  Robotics: ["ROS", "Gazebo", "RViz", "CARLA"],
  "Cloud / Tools": ["Azure ML", "GCP", "AWS GenAI", "Git", "Linux", "Docker"],
};

const projects = [
  { title: "Drivable Area Detection with Attention U-Net", tools: ["PyTorch","Python","OpenCV","scikit-learn"], icon: Cpu, image: projUnet,
    bullets: ["Developed and implemented an Attention-based U-Net in PyTorch for drivable area detection.","Accurately identified both main and adjacent driving lanes using the Berkeley Dataset.","Trained the model with varying parameters, achieving a Dice coefficient accuracy of 0.7."] },
  { title: "Image Classification with Vision Transformers", tools: ["Python","PyTorch","CUDA"], icon: ImageIcon, image: projVit,
    bullets: ["Implemented vision transformers for image classification on the COCO dataset.","Achieved 95% classification accuracy."] },
  { title: "Behavioral Cloning for Autonomous Driving", tools: ["CARLA","PyTorch","OpenCV","Python","Linux"], icon: Cog, image: projCarla,
    bullets: ["Integrated the CARLA Simulator with Linux to collect 2D images from a camera mounted on the head of the car while driving in simulation.","Trained an encoder-decoder CNN model in PyTorch to estimate steering angles.","Reached 90% accuracy on the steering-angle prediction task."] },
  { title: "Semantic Segmentation", tools: ["Python","PyTorch","CUDA"], icon: Layers, image: projSegm,
    bullets: ["Developed a novel convolution-based skip connection, improving on traditional skip connections.","Achieved 98% accuracy on the COCO dataset."] },
  { title: "Sensor Fusion of Camera and LiDAR for 3D Object Tracking", tools: ["OpenCV","C++","PCL"], icon: Boxes, image: projLidar,
    bullets: ["Performed sensor fusion for 3D object tracking by detecting vehicles using YOLO-trained models and computing bounding boxes around cars.","Clustered 3D point-cloud data with the RANSAC algorithm to associate LiDAR points with vehicles in road scenes."] },
];

const experience = [
  { role: "Computer Vision Engineer (Video Analytics)", company: "Tech Mahindra, Delhi", period: "Dec 2024 — Sept 2025",
    bullets: ["Designed a real-time YOLO-based object detection and tracking system for live video feeds in dynamic environments.","Integrated multi-object tracking to maintain persistent object identities across frames for reliable monitoring.","Optimized model inference and the video processing pipeline for low-latency, production-grade deployment.","Built and deployed a SlowFast action-recognition system for healthcare compliance (hand sanitization, equipment contact) reaching 80% accuracy on Azure ML."] },
  { role: "Machine Vision Engineer", company: "Trimble / Wabtec Corporation, Boston", period: "Apr 2022 — May 2024",
    bullets: ["Engineered an RCNN-based deep learning algorithm for the CSCV machine vision system, achieving 95% detection accuracy on Gear Case bungs.","Performed deep camera calibration, configuration and optimization for high-accuracy industrial image capture.","Identified bottlenecks via statistical analysis and shipped fixes that improved overall system efficiency by 30%.","Drove 70% revenue growth through timely delivery, on-site installation support and cross-functional debugging."] },
  { role: "Assistant System Engineer", company: "Tata Consultancy Services, Mumbai", period: "Feb 2017 — Oct 2019",
    bullets: ["Built advanced image processing algorithms that improved text extraction accuracy from scanned documents (OCR).","Streamlined deployment via DevOps pipelines, reducing release friction and improving operational efficiency.","Led cross-functional collaboration across the product development and deployment cycle."] },
];

function Nav() {
  const links = [["About","#about"],["Skills","#skills"],["Projects","#projects"],["Experience","#experience"],["Contact","#contact"]];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-primary to-secondary text-primary-foreground"><Eye className="h-4 w-4" /></span>
          <span className="text-gradient">Akshata Pore</span>
        </a>
        <ul className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {links.map(([l,h]) => <li key={h}><a href={h} className="transition-colors hover:text-foreground">{l}</a></li>)}
        </ul>
        <a href={RESUME} download className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-foreground transition hover:bg-primary/20 sm:inline-flex">
          <Download className="h-3.5 w-3.5" /> Resume
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for senior CV roles
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Teaching machines <br />to <span className="text-gradient">see the world</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Computer Vision Engineer with 4+ years building real-time perception systems — from YOLO-powered video analytics to robotic 3D vision and industrial inspection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.18_210/40%)] transition hover:opacity-90">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={RESUME} download className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/Akshata1801/" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/akshatapore/" target="_blank" rel="noreferrer" className="transition hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:akshatapore18@gmail.com" className="transition hover:text-foreground"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
          <img src={heroImg} alt="Neural network and computer vision visualization" className="relative w-full rounded-3xl border border-border object-cover glow" />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, center=false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" />{eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function About() {
  const stats = [["4+","Years Experience"],["95%","Detection Accuracy"],["30%","Latency Reduced"],["10+","Vision Projects"]];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About" title="Engineering perception systems that ship" />
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>I'm a Computer Vision Engineer with deep experience across deep learning, image processing, 3D vision, and robotics. From the factory floor at Trimble/Wabtec to real-time video analytics at Tech Mahindra, I've built and deployed perception systems that move from notebook to production.</p>
          <p>My work spans camera calibration and optimization, multi-object tracking, action recognition, sensor fusion (camera + LiDAR), and robotic vision — backed by an M.S. in Robotics Engineering from Worcester Polytechnic Institute.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([n,l]) => (
            <div key={l} className="glass rounded-2xl p-5">
              <div className="text-3xl font-bold text-gradient">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const icons: Record<string, typeof Code2> = { Languages: Code2, "ML / DL": Brain, Robotics: Cog, "Cloud / Tools": GitBranch };
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="Tooling & technical stack" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([cat, items]) => {
          const Icon = icons[cat];
          return (
            <div key={cat} className="glass group rounded-2xl p-6 transition hover:border-primary/50">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{cat}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className="rounded-md border border-border bg-background/50 px-2 py-1 text-xs text-muted-foreground">{s}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Career timeline" />
      <div className="relative space-y-6 border-l border-border pl-8">
        {experience.map((e) => (
          <div key={e.role} className="relative">
            <span className="absolute -left-[37px] top-2 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-background" />
            </span>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-primary">{e.period}</div>
              <h3 className="mt-1 text-base font-semibold text-foreground">{e.role}</h3>
              <p className="text-sm text-muted-foreground">{e.company}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" /><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Selected computer vision work" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.title} className="glass group relative overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-primary/50" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg"><Icon className="h-5 w-5" /></div>
              </div>
              <div className="relative p-6">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" /><span>{b}</span></li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">{t}</span>)}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <SectionHeading eyebrow="Contact" title="Let's build vision systems together" center />
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Open to senior Computer Vision and Machine Vision roles. Reach out by email or connect on LinkedIn.</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:akshatapore18@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"><Mail className="h-4 w-4" /> akshatapore18@gmail.com</a>
        <a href="tel:+919022383342" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"><Phone className="h-4 w-4" /> +91 90223 83342</a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a href="https://github.com/Akshata1801/" target="_blank" rel="noreferrer" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:border-primary/50"><Github className="h-5 w-5" /></a>
        <a href="https://www.linkedin.com/in/akshatapore/" target="_blank" rel="noreferrer" className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:border-primary/50"><Linkedin className="h-5 w-5" /></a>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Akshata Pore · Computer Vision Engineer</footer>;
}

export default function App() {
  return (
    <main className="min-h-screen">
      <Nav /><Hero /><About /><Skills /><Experience /><Projects /><Contact /><Footer />
    </main>
  );
}
