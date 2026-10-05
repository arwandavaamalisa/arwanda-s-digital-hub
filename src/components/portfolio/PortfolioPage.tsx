import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Clipboard,
  ExternalLink,
  FileText,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { caseStudies, experiences, services, toolGroups, type CaseStudy } from "@/data/portfolio-data";
import portraitAsset from "@/assets/arwanda-portrait.jpg.asset.json";

const navItems = ["Home", "About", "Services", "Work", "Experience", "Contact"];
const emailPlatforms = ["MailerLite", "Brevo", "Mailchimp", "Klaviyo", "GoHighLevel"];
const processSteps = ["Brief", "Copy", "Design", "Setup", "QA", "Schedule", "Track"];

function scrollTo(section: string) {
  document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

function BrandMark() {
  return (
    <button type="button" onClick={() => scrollTo("home")} className="group flex items-center gap-3 text-left" aria-label="Go to top">
      <span className="grid size-9 place-items-center rounded-full border border-primary/35 bg-accent text-xs font-bold text-primary transition-transform group-hover:rotate-6">A</span>
      <span className="font-display text-sm font-bold tracking-[0.15em] text-foreground">ARWANDA</span>
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
        <BrandMark />
        <nav className="hidden items-center justify-self-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item} type="button" onClick={() => scrollTo(item)} className="nav-link text-sm text-muted-foreground hover:text-foreground">{item}</button>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button onClick={() => scrollTo("contact")} className="h-11 rounded-full px-5">Let&apos;s Work Together <ArrowDownRight /></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] bg-background p-8">
            <SheetHeader className="border-b border-border pb-6 text-left">
              <SheetTitle className="font-display tracking-[0.15em]">ARWANDA</SheetTitle>
              <SheetDescription>Virtual Assistant & Business Support</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item}>
                  <button type="button" onClick={() => scrollTo(item)} className="grid grid-cols-[2rem_1fr_auto] items-center border-b border-border py-5 text-left">
                    <span className="text-xs text-primary">0{index + 1}</span><span className="font-display text-2xl">{item}</span><ChevronRight className="size-4" />
                  </button>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
      <p className="section-label">{eyebrow}</p>
      <div>
        <h2 className="font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">{title}</h2>
        {body ? <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{body}</p> : null}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 overflow-hidden border-b border-border">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl grid-rows-[1fr_auto] px-5 lg:px-8">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:py-20">
          <div className="relative z-10">
            <p className="section-label mb-7">Remote Virtual Assistant · Business Support · Digital Operations</p>
            <h1 className="font-display max-w-5xl text-5xl leading-[0.98] font-semibold text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Reliable support that keeps your <span className="text-primary">business moving.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I help founders, executives, and growing businesses stay organized, responsive, and operationally efficient — from administrative support and client communication to digital systems, websites, CRM, and marketing operations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => scrollTo("contact")} className="h-12 rounded-full px-6">Let&apos;s Work Together <ArrowRight /></Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("work")} className="h-12 rounded-full px-6">View My Work <ArrowDownRight /></Button>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-7">
              <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-success shadow-[0_0_0_5px_var(--status-ring)]" />Available for remote opportunities</span>
              <span className="inline-flex items-center gap-2"><Globe2 className="size-4 text-primary" />Bali, Indonesia · International clients</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="portrait-panel relative flex aspect-[7/10] flex-col overflow-hidden rounded-[2rem] border border-border bg-secondary sm:aspect-[4/5]">
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-xs uppercase tracking-[0.16em] text-muted-foreground"><span>Personal brand</span><span>2026</span></div>
              <div className="flex min-h-0 flex-1 items-end justify-center px-6 pb-5 pt-14">
                <div className="aspect-square w-48 max-h-full shrink overflow-hidden rounded-full border border-primary/25 bg-background/60 sm:w-56"><img src={portraitAsset.url} alt="Arwanda Nur Fatta Amalisa" className="size-full object-cover object-[center_30%]" /></div>
              </div>
              <div className="relative p-6 pb-4 sm:pb-6">
                <div className="border-t border-foreground/15 pt-5 sm:pt-7">
                  <p className="font-display text-2xl font-semibold">Arwanda Nur Fatta Amalisa</p>
                  <p className="mt-1 text-sm text-muted-foreground">Virtual Assistant &amp; Business Support Professional</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-16 hidden rounded-full border border-primary/20 bg-background px-4 py-2 text-xs font-medium text-primary shadow-sm sm:block">Based in Bali</div>
          </div>
        </div>
        <div className="grid border-t border-border py-6 sm:grid-cols-2 lg:grid-cols-4">
          {["3+ Years Experience", "International Clients", "Remote Professional", "English & Indonesian"].map((item) => (
            <div key={item} className="flex items-center gap-3 py-2 text-sm font-medium sm:border-l sm:border-border sm:px-5 first:sm:border-l-0 first:sm:pl-0"><Check className="size-4 text-primary" />{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Services" title="How I can support your business" body="From keeping daily operations organized to managing digital systems and customer communication, I provide flexible support across the tasks that keep a business running." />
        <div className="mt-16 grid border-t border-border md:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => (
            <article key={service.number} className="service-card group border-b border-border p-7 md:odd:border-r md:last:col-span-2 md:last:border-r-0 lg:col-span-2 lg:border-r lg:odd:border-r lg:nth-[3]:border-r-0 lg:nth-[4]:col-span-3 lg:last:col-span-3 lg:last:border-r-0">
              <div className="flex items-start justify-between"><span className="text-xs font-semibold text-primary">{service.number}</span><ArrowDownRight className="size-5 text-muted-foreground transition-transform group-hover:rotate-[-45deg] group-hover:text-primary" /></div>
              <h3 className="mt-12 font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.summary}</p>
              <ul className="mt-7 flex flex-wrap gap-2">{service.items.map((item) => <li key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyDialog({ project }: { project: CaseStudy }) {
  return (
    <Dialog>
      <DialogTrigger asChild><Button variant="ghost" className="h-auto p-0 text-foreground">View Case Study <ArrowRight /></Button></DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-border p-7 sm:p-10">
        <DialogHeader className="text-left">
          <p className="section-label">Selected Work · {project.number}</p>
          <DialogTitle className="mt-4 font-display text-4xl leading-tight">{project.client}</DialogTitle>
          <DialogDescription className="text-base">{project.role}</DialogDescription>
        </DialogHeader>
        <div className="mt-5 border-y border-border py-6">
          <p className="text-sm font-semibold text-primary">Scope</p><p className="mt-2 leading-7 text-muted-foreground">{project.scope}</p>
        </div>
        <div className="mt-6"><h4 className="font-display text-xl font-semibold">Key work</h4><ul className="mt-4 space-y-3">{project.work.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div>
        <div className="mt-8"><h4 className="font-display text-xl font-semibold">Tools</h4><div className="mt-3 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-secondary px-3 py-1.5 text-xs">{tool}</span>)}</div></div>
      </DialogContent>
    </Dialog>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-foreground py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <p className="section-label text-accent">Portfolio</p>
          <div><h2 className="font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">Selected Work</h2><p className="mt-6 max-w-2xl text-lg leading-7 text-background/65">Selected projects across administration, digital operations, automation, customer support, and marketing.</p></div>
        </div>
        <div className="mt-16 border-t border-background/20">
          {caseStudies.map((project) => (
            <article key={project.client} className="group grid gap-5 border-b border-background/20 py-8 md:grid-cols-[4rem_1fr_1fr_auto] md:items-center">
              <span className="text-xs text-accent">{project.number}</span>
              <div><h3 className="font-display text-2xl font-semibold sm:text-3xl">{project.client}</h3><p className="mt-1 text-sm text-background/60">{project.role}</p></div>
              <p className="max-w-md text-sm leading-6 text-background/60">{project.focus}</p>
              <div className="[&_button]:text-background [&_button:hover]:bg-background/10"><CaseStudyDialog project={project} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailMarketing() {
  return (
    <section className="border-b border-border bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Email Marketing" title="Email marketing, from brief to send." body="I support brands with end-to-end email campaign execution — from copywriting and visual layout to ESP setup, QA testing, scheduling, and basic performance tracking." />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="campaign-placeholder relative min-h-96 overflow-hidden rounded-2xl border border-border bg-background p-7">
            <div className="flex items-center justify-between border-b border-border pb-5"><span className="text-sm font-semibold">Campaign workspace</span><span className="rounded-full bg-accent px-3 py-1 text-xs text-primary">Screenshot placeholder</span></div>
            <div className="mt-7 space-y-4"><div className="h-32 rounded-lg bg-secondary" /><div className="h-4 w-3/4 rounded-full bg-secondary" /><div className="h-4 w-1/2 rounded-full bg-secondary" /><div className="mt-8 grid grid-cols-3 gap-3"><div className="h-20 rounded-lg bg-accent" /><div className="h-20 rounded-lg bg-secondary" /><div className="h-20 rounded-lg bg-secondary" /></div></div>
            <p className="absolute bottom-6 left-7 text-xs text-muted-foreground">Real campaign imagery can be added here without invented results.</p>
          </div>
          <div>
            <p className="section-label">A clear, careful process</p>
            <ol className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {processSteps.map((step, index) => <li key={step} className="min-h-28 bg-background p-5"><span className="text-xs text-primary">0{index + 1}</span><p className="mt-7 font-display text-lg font-semibold">{step}</p></li>)}
              <li className="hidden min-h-28 bg-primary p-5 text-primary-foreground sm:block"><Sparkles className="size-5" /><p className="mt-7 text-sm font-medium">Ready to send</p></li>
            </ol>
            <div className="mt-8"><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Platforms</p><div className="mt-4 flex flex-wrap gap-2">{emailPlatforms.map((platform) => <span key={platform} className="rounded-full border border-border bg-background px-4 py-2 text-sm">{platform}</span>)}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Client Feedback" title="What Clients Say" body="Real feedback from clients I've had the opportunity to support across different projects and business functions." />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {["Digital Operations", "Business Support", "Client Communication"].map((category, index) => (
            <Dialog key={category}>
              <DialogTrigger asChild>
                <button type="button" className={`feedback-tile group min-h-80 border border-border bg-secondary p-6 text-left transition-colors hover:bg-accent ${index === 1 ? "md:translate-y-8" : ""}`}>
                  <div className="flex items-start justify-between"><Quote className="size-7 text-primary" /><MoveUpRight className="size-4 text-muted-foreground" /></div>
                  <div className="mt-20 grid place-items-center rounded-lg border border-dashed border-primary/25 bg-background/50 px-4 py-10 text-center"><FileText className="size-6 text-primary" /><p className="mt-3 text-sm font-medium">Client feedback screenshot</p><p className="mt-1 text-xs text-muted-foreground">Ready for real feedback</p></div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{category}</p>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl rounded-2xl p-8">
                <DialogHeader><DialogTitle className="font-display text-3xl">{category}</DialogTitle><DialogDescription>Full-resolution client feedback will appear here when the original screenshot is supplied.</DialogDescription></DialogHeader>
                <div className="mt-4 grid min-h-96 place-items-center rounded-xl border border-dashed border-primary/30 bg-secondary"><div className="text-center"><Quote className="mx-auto size-10 text-primary" /><p className="mt-4 font-medium">Feedback image placeholder</p></div></div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-y border-border bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Experience that goes beyond the title." />
        <div className="mt-16 lg:ml-[calc(37.5%+1.5rem)]">
          {experiences.map((item, index) => (
            <article key={item.company} className="relative grid gap-3 border-t border-border py-7 sm:grid-cols-[1fr_1fr_auto] sm:items-start">
              <div><span className="absolute -left-7 top-8 hidden size-2 rounded-full bg-primary lg:block" /><p className="font-display text-xl font-semibold">{item.company}</p><p className="mt-1 text-sm text-muted-foreground">{item.place}</p></div>
              <p className="text-sm font-medium">{item.role}</p><p className="text-xs text-muted-foreground sm:text-right">{item.period}</p>
              {index === 0 ? <span className="absolute right-0 top-0 rounded-b-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">Current</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutAndTools() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="About" title="Detail-oriented by habit, not by title." />
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="about-portrait flex min-h-96 flex-col justify-between rounded-2xl border border-border bg-accent p-7">
            <div className="flex justify-between text-xs uppercase tracking-[0.14em] text-primary"><span>Bali, Indonesia</span><span>Remote</span></div>
            <div><p className="font-display text-7xl font-semibold text-primary/30">ANFA</p><div className="mt-5 border-t border-primary/20 pt-5"><p className="font-display text-2xl font-semibold">English & Indonesian</p><p className="mt-2 text-sm text-muted-foreground">Working thoughtfully across teams, tools, and time zones.</p></div></div>
          </div>
          <div>
            <p className="max-w-2xl font-display text-2xl leading-relaxed text-foreground sm:text-3xl">I bring structure to busy workdays, communicate with care, and take ownership of the details that help a business run smoothly.</p>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">My experience spans executive assistance, customer service, digital operations, websites, CRM, automation, and marketing support. I adapt quickly, document clearly, and stay dependable when priorities shift.</p>
            <div className="mt-10 border-l-2 border-primary pl-6"><p className="section-label">Education</p><h3 className="mt-3 font-display text-xl font-semibold">Bachelor of English Language Literature & Letters</h3><p className="mt-2 text-sm text-muted-foreground">Universitas Terbuka · Denpasar, Indonesia</p><p className="mt-1 text-sm text-muted-foreground">Aug 2023 – Aug 2027 Expected · GPA 3.60 / 4.00</p></div>
          </div>
        </div>
        <div className="mt-24 border-t border-border pt-12"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="section-label">Tools & Technology</p><h3 className="mt-4 font-display text-3xl font-semibold">Comfortable in the systems behind the work.</h3></div><div className="grid gap-8 sm:grid-cols-2">{toolGroups.map((group) => <div key={group.category}><p className="text-sm font-semibold">{group.category}</p><div className="mt-3 flex flex-wrap gap-2">{group.tools.map((tool) => <span key={tool} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground">{tool}</span>)}</div></div>)}</div></div></div>
      </div>
    </section>
  );
}

function Recommendation() {
  return (
    <section className="border-y border-border bg-accent py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
        <div><p className="section-label">Professional Recommendation</p><h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-5xl">Trusted to support international clients.</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">A professional recommendation letter from an Australian client is available for relevant opportunities.</p></div>
        <Button variant="outline" size="lg" asChild className="h-auto min-h-12 whitespace-normal rounded-full bg-background px-6 py-3 text-center"><a href="mailto:arwandava.amalisa@gmail.com?subject=Recommendation%20Letter%20Request">Recommendation Letter Available Upon Request <Mail /></a></Button>
      </div>
    </section>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return <Button type="button" variant="ghost" size="icon" onClick={copy} aria-label={`Copy ${label}`} title={`Copy ${label}`}>{copied ? <Check /> : <Clipboard />}</Button>;
}

function Contact() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:arwandava.amalisa@gmail.com?subject=${encodeURIComponent(`Work inquiry from ${name}${company ? ` at ${company}` : ""}`)}&body=${encodeURIComponent(message)}`;
  }
  const contacts = [
    { label: "Email", value: "arwandava.amalisa@gmail.com", href: "mailto:arwandava.amalisa@gmail.com", icon: Mail },
    { label: "Phone", value: "+62 857 3864 5185", href: "tel:+6285738645185", icon: Phone },
    { label: "LinkedIn", value: "linkedin.com/in/arwanda-nur-fatta-amalisa", href: "https://linkedin.com/in/arwanda-nur-fatta-amalisa", icon: Linkedin },
    { label: "Website", value: "workwitharwanda.my.id", href: "https://workwitharwanda.my.id", icon: Globe2 },
  ];
  return (
    <section id="contact" className="scroll-mt-20 bg-foreground py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div><p className="section-label text-accent">Contact</p><h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">Need someone who can take things off your plate?</h2><p className="mt-7 max-w-xl text-lg leading-7 text-background/65">Tell me what your team needs support with. I&apos;ll respond with thoughtful next steps for working together.</p>
            <div className="mt-10 border-t border-background/20">{contacts.map(({ label, value, href, icon: Icon }) => <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-background/20 py-4"><Icon className="size-4 text-accent" /><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="min-w-0 truncate text-sm text-background/75 hover:text-background">{value}</a><div className="[&_button]:text-background [&_button:hover]:bg-background/10"><CopyButton value={value} label={label} /></div></div>)}</div>
          </div>
          <form onSubmit={submit} className="rounded-2xl bg-background p-6 text-foreground sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Your name<Input name="name" required placeholder="Name" className="mt-2 h-12" /></label><label className="text-sm font-medium">Company<Input name="company" placeholder="Company or brand" className="mt-2 h-12" /></label></div>
            <label className="mt-5 block text-sm font-medium">Email<Input name="email" type="email" required placeholder="you@company.com" className="mt-2 h-12" /></label>
            <label className="mt-5 block text-sm font-medium">How can I help?<Textarea name="message" required placeholder="Share a little about the support you need..." className="mt-2 min-h-36 resize-none" /></label>
            <Button type="submit" size="lg" className="mt-6 h-12 w-full rounded-full">Start a Conversation <ArrowRight /></Button>
            <p className="mt-4 text-center text-xs text-muted-foreground">This opens your email app with your message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-background/15 bg-foreground py-7 text-background"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 Arwanda Nur Fatta Amalisa. All rights reserved.</p><button type="button" onClick={() => scrollTo("home")} className="inline-flex items-center gap-2 hover:text-background">Back to top <ArrowDownRight className="size-3 rotate-180" /></button></div></footer>;
}

export function PortfolioPage() {
  return <div className="min-h-screen bg-background text-foreground"><Header /><main><Hero /><Services /><Work /><EmailMarketing /><Testimonials /><Experience /><AboutAndTools /><Recommendation /><Contact /></main><Footer /></div>;
}
