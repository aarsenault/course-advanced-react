import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

// this is a js object, not CSS!
const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  pageBreak: '1300px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};
// Monkey patch because it wasn't camel cased
theme.lightGrey = theme.lightgrey

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

// this is global css, just call it from anywhere in the app and it gets applied
injectGlobal `
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: bordre-box;
    font-size: 10px;
  }
  /* this is the best way to set box shaddow on absolutely everything */
  *, *:before, *:after {
    box-sizing: inherit;


  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    /* line height without units is multiplier on font size */
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    /* not actually in the theme provider so not props => props.theme etc.  */
    color: ${theme.black}
  }

`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
