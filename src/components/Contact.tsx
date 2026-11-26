"use client";
import { Button, Card } from "@mui/material";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return <section className="wrap section contact flow">
    <p className="eyebrow">03 / GET IN TOUCH</p><h1>Let’s build something great.</h1>
    <p className="lead">Have a project in mind or just want to say hello? Find me here.</p>
    <div className="contact-grid">
      <Card component="article" className="contact-card"><h2>Email</h2><p>{profile.email || "Add your preferred contact email."}</p>
        {profile.email ? <Button href={`mailto:${profile.email}`} variant="contained">Send email</Button> : <Button disabled variant="contained">Email coming soon</Button>}
      </Card>
      <Card component="article" className="contact-card"><h2>GitHub</h2><p>@siriwat191260</p><Button href={profile.github} target="_blank" rel="noopener noreferrer" variant="contained">View GitHub ↗</Button></Card>
      <Card component="article" className="contact-card"><h2>LinkedIn</h2><p>{profile.linkedin || "Add your LinkedIn profile URL."}</p>
        {profile.linkedin ? <Button href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="contained">View LinkedIn ↗</Button> : <Button disabled variant="contained">LinkedIn coming soon</Button>}
      </Card>
    </div>
  </section>;
}
