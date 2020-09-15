import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../global-styles';
import { useStaticQuery, graphql } from 'gatsby';
import TopBar from '../components/TopBar';
import Header from '../components/header';
import Modal from '../components/Modal';
import ScrollTop from '../components/ScrollTop';
import Footer from './footer';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../context/GlobalContextProvider';

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const node = React.useRef();
  const { modalOpen } = state;

  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <TopBar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <div ref={node}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            onClick={() => modalOpen && dispatch({ type: 'SET_MODAL_STATE' })}
          />
        )}
      </div>
      <ScrollTop modalOpen={modalOpen} />
      <GlobalStyle modalOpen={modalOpen} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Layout);
