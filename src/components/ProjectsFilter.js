import React from 'react';
import styled from 'styled-components';
import { useSiteData } from '../hooks/useSiteData';

const ProjectFilter = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 5rem auto;
  background: red;
  ul {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    li {
      padding: 0 2rem;
      text-decoration: none;
      list-style: none;
      cursor: pointer;
    }
  }
`;

export default ({ handleRenderGallery }) => {
  const {
    projects: { galleryFilter },
  } = useSiteData();

  return (
    <ProjectFilter>
      <ul>
        {galleryFilter.map((item, i) => (
          <li key={i} onClick={() => handleRenderGallery(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </ProjectFilter>
  );
};
