import type { IconifyIcon } from "@iconify/react";
import android from "@iconify-icons/simple-icons/android";
import arduino from "@iconify-icons/simple-icons/arduino";
import docker from "@iconify-icons/simple-icons/docker";
import express from "@iconify-icons/simple-icons/express";
import firebase from "@iconify-icons/simple-icons/firebase";
import github from "@iconify-icons/simple-icons/github";
import javascript from "@iconify-icons/simple-icons/javascript";
import laravel from "@iconify-icons/simple-icons/laravel";
import linux from "@iconify-icons/simple-icons/linux";
import mysql from "@iconify-icons/simple-icons/mysql";
import nestjs from "@iconify-icons/simple-icons/nestjs";
import nextdotjs from "@iconify-icons/simple-icons/nextdotjs";
import notion from "@iconify-icons/simple-icons/notion";
import php from "@iconify-icons/simple-icons/php";
import postgresql from "@iconify-icons/simple-icons/postgresql";
import postman from "@iconify-icons/simple-icons/postman";
import react from "@iconify-icons/simple-icons/react";
import supabase from "@iconify-icons/simple-icons/supabase";
import typescript from "@iconify-icons/simple-icons/typescript";
import vercel from "@iconify-icons/simple-icons/vercel";

export type Brand = { icon: IconifyIcon; color: string };

const white = "var(--txt)"; // merek berlogo hitam dipakai putih di latar gelap

/* Logo merek (simple-icons) + warna merek, dipetakan dari label pill/tag di content.ts. */
export const BRANDS: Record<string, Brand> = {
  PHP: { icon: php, color: "#777BB4" },
  JavaScript: { icon: javascript, color: "#F7DF1E" },
  TypeScript: { icon: typescript, color: "#3178C6" },
  Laravel: { icon: laravel, color: "#FF2D20" },
  NestJS: { icon: nestjs, color: "#E0234E" },
  "Express.js": { icon: express, color: white },
  Express: { icon: express, color: white },
  "React.js": { icon: react, color: "#61DAFB" },
  "Next.js": { icon: nextdotjs, color: white },
  "React Native": { icon: react, color: "#61DAFB" },
  MySQL: { icon: mysql, color: "#4479A1" },
  PostgreSQL: { icon: postgresql, color: "#4169E1" },
  Firestore: { icon: firebase, color: "#FFCA28" },
  Firebase: { icon: firebase, color: "#FFCA28" },
  Supabase: { icon: supabase, color: "#3FCF8E" },
  "Git dan GitHub": { icon: github, color: white },
  Docker: { icon: docker, color: "#2496ED" },
  Postman: { icon: postman, color: "#FF6C37" },
  "Linux, VM, VPS": { icon: linux, color: "#FCC624" },
  Notion: { icon: notion, color: white },
  Arduino: { icon: arduino, color: "#00878F" },
  Android: { icon: android, color: "#3DDC84" },
  Vercel: { icon: vercel, color: white },
};
