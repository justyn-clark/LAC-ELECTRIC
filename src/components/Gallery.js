import React, { useState } from 'react';
import styled from 'styled-components';
import { respondTo } from '../helper';
import { useSiteData } from '../hooks/useSiteData';
import { useProjectImages } from '../hooks/useProjectImages';

const GalleryWrap = styled.section`
  margin-bottom: 4rem;
`;

const ProjectFilter = styled.nav`
  display: flex;
  align-items: center;
  ${respondTo.sm`
    justify-content: center;
  `}
  nav {
    display: inline-flex;
    flex-wrap: wrap;
    padding: 0;
    ${respondTo.sm`
		  flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
	  `}
    button {
      padding: 0.5rem;
      margin: 8px 1rem;
      width: auto;
      text-align: center;
      background: none;
      border: none;
      text-decoration: none;
      list-style: none;
      cursor: pointer;
      opacity: 0.5;
      outline: none;
      ${respondTo.sm`
		    padding: 0.6rem 1rem;
        width: auto;
        margin: 7.9px 0.5rem;
	    `}
      &:hover,
      &.active {
        color: white;
        background: #f20079;
        opacity: 1;
      }
    }
  }
`;

export default ({ renderGroup }) => {
  const {
    projects: { galleryFilter },
  } = useSiteData();

  const {
    Buildings,
    Details,
    ElectricalRooms,
    Equipment,
    Lighting,
  } = useProjectImages();

  const [activeGroup, setActiveGroup] = useState('Buildings');

  const renderGallery = (item) => {
    switch (item) {
      case 'Buildings':
        return renderGroup(Buildings);
      case 'Details':
        return renderGroup(Details);
      case 'Electrical Rooms':
        return renderGroup(ElectricalRooms);
      case 'Equipment':
        return renderGroup(Equipment);
      case 'Lighting':
        return renderGroup(Lighting);
      default:
        return renderGroup(Buildings);
    }
  };

  const handleOnClick = (item) => setActiveGroup(item.name);

  return (
    <GalleryWrap>
      <ProjectFilter>
        <nav>
          {galleryFilter.map((item, i) => (
            <button
              className={activeGroup === item.name ? 'active' : ''}
              key={i}
              onClick={() => handleOnClick(item)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </ProjectFilter>
      {renderGallery(activeGroup)}
    </GalleryWrap>
  );
};
