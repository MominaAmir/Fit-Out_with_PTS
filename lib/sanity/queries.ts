// Example GROQ queries for the project's datasets
export const allServicesQuery = `*[_type == "service"] | order(title asc)`

export const allProjectsQuery = `*[_type == "project"] | order(completedAt desc)`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]`

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc)`
