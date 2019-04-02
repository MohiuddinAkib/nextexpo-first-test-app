import './custom-theme.interface';

import createMuiTheme, {
  ThemeOptions
} from '@material-ui/core/styles/createMuiTheme';

// The default theme provided by MUI
const defaultTheme = createMuiTheme();

/**
 * @description   Global theme that refactors repetative theme work
 *
 * @param         options
 */

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    appDrawer: {
      width: 255,
      breakpoint: 'lg'
    },
    overrides: {
      MuiMenuItem: {
        gutters: {
          padding: `${defaultTheme.spacing.unit * 0.02}rem 1rem`
        },
        root: {
          fontSize: defaultTheme.typography.body2.fontSize
        }
      }
    },
    typography: {
      useNextVariants: true
    },
    // Spreading every custom theme options that will be passed as params into this func
    ...options
  });
}
