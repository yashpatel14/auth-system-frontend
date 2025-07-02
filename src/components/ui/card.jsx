import React from 'react'
import { HoverEffect } from "../ui/card-hover-effect";

const Card = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export default Card


export const projects = [
  {
    title: "Secure Authentication",
    description:
      "Supports both custom auth and Google OAuth for improved security and user convenience.",
    link: "https://stripe.com",
  },
  {
    title: "Session Management",
    description:
      "Monitor and control active sessions across all devices.",
    link: "https://netflix.com",
  },
  {
    title: "Admin Dashboard",
    description:
      "Comprehensive user management with role-based access control and analytics.",
    link: "https://google.com",
  },
  
];
