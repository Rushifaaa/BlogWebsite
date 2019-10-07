import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                color: 'white',
            }
        },
        MuiFormLabel: {
            root: {
                color: 'white'
            }
        },
        MuiSelect: {
            root: {
                color: 'white'
            },
            icon: {
                color: 'white'
            }
        },
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: '1px solid rgb(255, 0, 0)',
                },

            }
        },
        MuiInputBase: {
            root: {
                color: 'white',
                fontSize: '15px',
            }
        },
        MuiIconButton: {
            root: {
                borderRadius: '0',
            }
        }
    }
});

export { theme };
