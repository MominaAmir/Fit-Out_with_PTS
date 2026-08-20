import { groq } from 'next-sanity';

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(year desc, publishedAt desc) {
    _id,
    title,
    slug,
    sector,
    category,
    summary,
    description,
    mainImage,
    gallery,
    location,
    year,
    area,
    duration,
    client,
    servicesProvided,
    featured,
    publishedAt
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    sector,
    category,
    summary,
    description,
    mainImage,
    gallery,
    location,
    year,
    area,
    duration,
    client,
    servicesProvided,
    featured,
    publishedAt
  }
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true] | order(year desc)[0...3] {
    _id,
    title,
    slug,
    sector,
    summary,
    mainImage,
    year
  }
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project"] {
    slug
  }
`;