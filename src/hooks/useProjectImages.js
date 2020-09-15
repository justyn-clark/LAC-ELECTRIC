import { useStaticQuery, graphql } from 'gatsby';

export const useProjectImages = () => {
  const {
    BalboaApartments,
    Buildings,
    Details,
    ElectricalRooms,
    Equipment,
    KensingtonCampus,
    Lighting,
    NewhallCrossing,
    NveApartments,
    TheOtsego,
    Urbanpolitian,
    Vaughn,
  } = useStaticQuery(
    graphql`
      query ProjectImages {
        Buildings: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Buildings" } }
        ) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        Details: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Details" } }
        ) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        ElectricalRooms: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "ElectricalRooms" } }
        ) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        Equipment: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Equipment" } }
        ) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        Lighting: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Lighting" } }
        ) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        Urbanpolitian: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Urbanpolitian" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        TheOtsego: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "TheOtsego" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        Vaughn: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "Vaughn" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        BalboaApartments: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "BalboaApartments" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        NewhallCrossing: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "NewhallCrossing" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        NveApartments: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "NveApartments" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        KensingtonCampus: allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "KensingtonCampus" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );
  return {
    BalboaApartments,
    Buildings,
    Details,
    ElectricalRooms,
    Equipment,
    KensingtonCampus,
    Lighting,
    NewhallCrossing,
    NveApartments,
    TheOtsego,
    Urbanpolitian,
    Vaughn,
  };
};
