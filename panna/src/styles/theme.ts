export default {
  border: {
    xxRadius: '5px',
    xRadius: '10px',
    radius: '25px',
    shadow: '0 0 0 0.2px rgb(204, 204, 204) inset'
  },
  font: {
    family: 'Montserrat',
    light: 100,
    regular: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      xxsmall: '10px',
      xsmall: '13px',
      small: '13px',
      medium: '18px',
      large: '22px',
      xlarge: '24px',
      xxlarge: '28px'
    },
    height: {
      xsmall: '10px',
      small: '14px'
    }
  },
  colors: {
    darkGray: '#272727',
    white: '#FFF',
    black: '#030517',
    pink: '#F50057',
    blue: '#12264e', // '#1d4165',
    lightGray: '#D9D9D9',
    gray: '#7B7B7B',
    red: '#e74c3c',
    middleRed: '#EB2521',
    green: '#0abdba',
    yellow: '#FFA903', // '#FFCB00',
    middleBlue: '#2E75B5',
    lightBlue: '#5B9BD5',
    veryLightGray: '#E6E6E6',
    error: '#fa3030',
    backgrounds: 'rgb(246, 246, 246)',
    forBorder: '#D9D9D9',
    transparent: 'transparent'
  },
  spacings: {
    xxsmall: '8px',
    xsmall: '16px',
    small: '24px',
    medium: '32px',
    large: '40px',
    xlarge: '48px',
    xxlarge: '56px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  sidebar: {
    colors: {
      gray: '#e9e9e9',
      blue: '#12264e', // '#1d4165'
      forBorder: '#D9D9D9'
    },
    menu: {
      height: '50px'
    },
    navLink: {
      color: '#000',
      fontWeight: 'normal'
    },
    navLinkActive: {
      color: '#12264e', // '#1d4165',
      fontWeight: 'bold'
    }
  }
} as const
