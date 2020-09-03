import { useStaticQuery, graphql } from 'gatsby';

export const useSiteData = () => {
  const { contentJson, allImageContent, pdf } = useStaticQuery(
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
              fluid {
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
          projects {
            cta
            imagesRecent {
              src
            }
            imagesAll {
              src
            }
            info
            title
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

  return { ...contentJson, allImageContent, pdf };
};
