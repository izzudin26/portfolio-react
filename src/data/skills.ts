import nodeImg from "../assets/nodejs.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import flutter from "../assets/flutter.svg";
import nestjs from "../assets/nestjs.svg";
import vue from "../assets/vue.svg";
import nuxt from "../assets/nuxt.svg";
import react from "../assets/reactjs.svg";
import tailwind from "../assets/tailwindcss.svg";
import postgres from "../assets/pgsql.svg";
// tools
import figma from "../assets/figma.svg";
import vscode from "../assets/vscode.svg";
import firebase from "../assets/firebase.svg";
import github from "../assets/github.svg";
import vs from "../assets/vs.png";
import cs from "../assets/csharp.png";
import dotnet from "../assets/dotnet.svg";

export type TTechnicalSkill = {
  icon: any;
  name: string;
};

export const tools: TTechnicalSkill[] = [
  {
    icon: figma,
    name: "Figma",
  },
  {
    icon: vscode,
    name: "VSCode",
  },
  {
    icon: firebase,
    name: "Firebase",
  },
  {
    icon: github,
    name: "Github",
  },
  {
    icon: postgres,
    name: "Postgres",
  },
  {
    icon: vs,
    name: "Visual Studio",
  },
];

export const skills: TTechnicalSkill[] = [
  {
    icon: nodeImg,
    name: "NodeJS",
  },
  {
    icon: js,
    name: "Javascript",
  },
  {
    icon: ts,
    name: "Typescript",
  },
  {
    icon: flutter,
    name: "Flutter",
  },
  {
    icon: nestjs,
    name: "NestJS",
  },
  {
    icon: vue,
    name: "Vue",
  },
  {
    icon: nuxt,
    name: "Nuxt",
  },
  {
    icon: react,
    name: "React",
  },
  {
    icon: tailwind,
    name: "Tailwind",
  },
  {
    icon: cs,
    name: "C#",
  },
  {
    icon: dotnet,
    name: ".NET",
  },
];
