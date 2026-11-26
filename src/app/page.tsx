"use client";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Button, Card, Chip, Divider } from "@mui/material";
import { profile, stack } from "@/data/portfolio";

export default function AboutPage() {
  return <>
    <section className="wrap hero">
      <div className="flow">
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1>Turning ideas into<br />digital experiences.</h1>
        <h2>Hi, I’m Siriwat.</h2>
        <p className="lead">Developer, problem solver, and curious creator. I build thoughtful web applications that make everyday life a little better.</p>
        <div className="actions"><Button component={Link} href="/projects/" variant="contained">View projects</Button><Button href="#passion" variant="outlined">My passion</Button></div>
      </div>
      <Card component="aside" className="profile" aria-label="Developer profile">
        <p className="eyebrow">DEVELOPER PROFILE</p>
        <div className="identity"><span className="initials">{profile.initials}</span><div><h2>{profile.name}</h2><p>{profile.role}</p></div></div>
        <p className="bio">I build web apps and enjoy turning rough ideas into things people can use.</p>
        <Divider /><p className="eyebrow">MY TECH STACK</p>
        <div className="stack">{stack.map((tech, i) => <div className="badge" key={tech.name} style={{ "--i": i } as CSSProperties}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/stack/${tech.icon}.svg`} width="24" height="24" alt="" /><span>{tech.name}</span>
        </div>)}</div>
      </Card>
    </section>
    <section className="band" id="passion"><div className="wrap section flow">
      <p className="eyebrow">01 / ABOUT ME</p><h2>Curiosity meets craft.</h2>
      <p className="lead page-intro">I’m Siriwat Songwattana, a web developer who enjoys turning rough ideas into useful digital experiences. My passion is solving problems, learning new tools, and building thoughtful applications that make everyday life a little better.</p>
      <div className="chips">{stack.map(tech => <Chip key={tech.name} label={tech.name} />)}</div>
      <Button component={Link} href="/projects/" variant="contained">Explore my projects</Button>
    </div></section>
  </>;
}
