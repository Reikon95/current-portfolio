import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-6 bg-primary">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-foreground">
            Cameron Blackwood
          </h1>
          <div className="space-x-4">
            <Link
              href="#portfolio"
              className="text-primary-foreground hover:text-secondary"
            >
              Portfolio
            </Link>
            <Link
              href="#talks"
              className="text-primary-foreground hover:text-secondary"
            >
              Talks
            </Link>
            <Link
              href="#contact"
              className="text-primary-foreground hover:text-secondary"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-24">
        <HeroSection />
        <PortfolioSection />
        <TalksSection />
        <ContactSection />
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Cameron Blackwood. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/reikon95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cameron-blackwood/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="mailto:cameronjwblackwood@gmail.com">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/images/cam-edinburghjs.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center space-y-6 bg-background/80 p-8 rounded-lg backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-primary">Hi there!</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm a passionate software engineer, content creator and entrepeneur,
          specialising in creating frictonless web experiences.
        </p>
        <Button
          asChild
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const projects = [
    {
      title: "StartupGradJobs",
      description: "A job website",
    },
    {
      title: "MicroInfluencer",
      description:
        "A platform connecting niche creators and brands. My most successful project so far!",
    },
    {
      title: "Edinburgh Northern RFC",
      description: "My rugby club's website.",
    },
  ];

  return (
    <section id="portfolio" className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-card hover:bg-card/90 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-card-foreground">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-card-foreground/70">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
// https://www.youtube.com/watch?v=RtvROuM54-w

// https://www.youtube.com/watch?v=TAXWmYIvI0c - scrimba
function TalksSection() {
  const talks = [
    {
      title: "Wasp - a SaaS in seconds",
      event: "EdinburghJS",
      date: "2024",
      details: "How I launched a SaaS in record times using Wasp",
    },
    {
      title: "The VANS stack",
      event: "EdinburghJS",
      date: "2024",
      details:
        "Livestream for the event is currently unavailable, but I have the talk in YouTube format. A discussion around using Supabase, Vercel, AWS and NextJS to create web apps.",
    },
    {
      title: "Tech Job Disasters To Avoid",
      event: "Scrimba Podcast",
      date: "2022",
      details:
        "A livestream on advising new developers on getting their first job in tech.",
    },
  ];

  return (
    <section id="talks" className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary">My Talks</h2>
      <div className="space-y-4">
        {talks.map((talk, index) => (
          <Card
            key={index}
            className="bg-card hover:bg-card/90 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-card-foreground">
                {talk.title}
              </CardTitle>
              <CardDescription className="text-card-foreground/70">
                {talk.event} - {talk.date}
              </CardDescription>
            </CardHeader>
            <CardContent>{talk.details}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary">
        Get in Touch
      </h2>
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Contact Form</CardTitle>
          <CardDescription className="text-card-foreground/70">
            Fill out the form below to send me a message.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-card-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Cameron Blackwood"
                  className="bg-input text-input-foreground"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-card-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-input text-input-foreground"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-card-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="bg-input text-input-foreground"
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
