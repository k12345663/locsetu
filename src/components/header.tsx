"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages, Menu, X, Wrench } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Wrench className="h-7 w-7 text-primary" />
            <span className="text-xl font-headline font-bold text-foreground">
              LocSetu Connect
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#workers" className="text-muted-foreground hover:text-primary transition-colors">Workers</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/">English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hi">हिंदी</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mr">मराठी</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>Sign Up</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center gap-4 p-4">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#workers" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Workers</Link>
            <div className="flex items-center gap-4 mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Languages className="mr-2 h-4 w-4" /> Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuItem asChild>
                    <Link href="/">English</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hi">हिंदी</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/mr">मराठी</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
