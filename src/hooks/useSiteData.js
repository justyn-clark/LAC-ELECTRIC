import { useStaticQuery, graphql } from 'gatsby';

export const useSiteData = () => {
  const { allImageContent, contentJson, pdf } = useStaticQuery(
    graphql`
      query Content {
        pdf: allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
        allImageContent: allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1440) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contentJson {
          title
          services {
            title
            items {
              title
              info
              image
            }
          }
          contact {
            address
            email
            phone
          }
          reviews {
            id
            text
            rating
            user {
              name
            }
          }
          projects {
            title
            info
            cta
            galleryFilter {
              name
            }
            nveApartments {
              src
            }
            imagesRecent {
              src
            }
            imagesAll {
              src
            }
          }
          about {
            info {
              title
              desc
            }
            objectives {
              title
              desc
            }
          }
          serviceTypes {
            title
            info
            image
          }
          navigation {
            label
            path
          }
        }
      }
    `,
  );

  return {
    ...contentJson,
    allImageContent,
    pdf,
  };
};
