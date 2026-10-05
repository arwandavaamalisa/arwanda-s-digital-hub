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
