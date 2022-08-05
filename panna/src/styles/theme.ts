import ArrowDown from 'assets/icons/arrow-down.icon'
import BackhaulIcon from 'assets/icons/backhaul.icon'
import EquipmentIcon from 'assets/icons/equipment.icon'
import Financial from 'assets/icons/financial.icon'
import HomeIcon from 'assets/icons/home.icon'
import InboundIcon from 'assets/icons/inbound.icon'
import RegisterIcon from 'assets/icons/register.icon'
import ScheduleIcon from 'assets/icons/schedule.icon'
import Settings from 'assets/icons/settings.icon'
import TrackingIcon from 'assets/icons/tracking.icon'
import UploadIcon from 'assets/icons/upload.icon'

export default {
  icons: {
    home: HomeIcon,
    register: RegisterIcon,
    backhaulIcon: BackhaulIcon,
    arrowDown: ArrowDown,
    scheduleIcon: ScheduleIcon,
    trackingIcon: TrackingIcon,
    inboundIcon: InboundIcon,
    equipmentIcon: EquipmentIcon,
    financial: Financial,
    settings: Settings,
    uploadIcon: UploadIcon
  },
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
    white: '#FFF',
    aqua: '#00aa9c',
    darkGray: '#171717',
    lightGray: '#262626',
    black: '#030517',
    pink: '#F50057',
    blue: '#12264e', // '#1d4165',
    gray: '#D9D9D9',
    red: '#e74c3c',
    middleRed: '#EB2521',
    green: '#00B050',
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
