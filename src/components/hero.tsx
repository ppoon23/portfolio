import { Github, Twitter, Mail, Linkedin, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import profilePic from "@/assets/profile.jpg"

export function Hero() {
    return (
        <div className="flex flex-col items-center text-center pt-20 pb-12 space-y-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-muted">
                <Image
                    src={profilePic}
                    alt="Patrick Poon"
                    className="object-cover scale-250"
                    priority
                />
            </div>

            <div className="space-y-2 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight">Patrick Poon</h1>
                <p className="text-l text-muted-foreground italic">
                    AI/ML software engineer
                </p>
                <p className="text-xl text-muted-foreground">
                    I like to travel and eat.
                </p>
            </div>

            <div className="flex gap-4">
                <Link href="https://x.com/ppoon23" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Twitter className="w-6 h-6" />
                </Link>
                <Link href="https://github.com/ppoon23" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Github className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/ppoon23/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:patrickpoon23@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Mail className="w-6 h-6" />
                </Link>
                <Link href="https://docs.google.com/document/d/179yKPZCjMsoWF6HklqM7rW1IDkxx2SN3vXwP8YHmBbI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors" title="Download Resume">
                    <FileText className="w-6 h-6" />
                </Link>
            </div>
        </div>
    )
}
