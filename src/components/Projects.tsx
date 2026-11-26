"use client";
import { Button, Card, Chip } from "@mui/material";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return <section className="wrap section projects flow">
    <p className="eyebrow">02 / SELECTED WORK</p><h1>Ideas. Built into reality.</h1>
    <p className="lead">Projects, experiments, and the things I’ve learned along the way.</p>
    <div className="grid">{projects.map((project, i) => <Card component="article" className="project-card" key={project.name}>
      <div className="cover"><span className="eyebrow">0{i + 1} / PROJECT</span><strong>{project.name}</strong><small>Sample project</small></div>
      <h2>{project.name}</h2><p className="description">{project.description}</p><Chip label={project.tech} size="small" />
      <details><summary>Project details</summary><p className="description">Replace this sample with your role, features, technical decisions, and results.</p></details>
      {project.demo ? <Button href={project.demo} target="_blank" rel="noopener noreferrer" variant="contained">View demo ↗</Button>
        : <><Button disabled variant="contained">View demo ↗</Button><small className="description">Demo link coming soon.</small></>}
    </Card>)}</div>
    <Button component={Link} href="/contact/" variant="outlined">Let’s work together</Button>
  </section>;
}
