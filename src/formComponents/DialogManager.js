import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default ({configItem, setFieldValue, value}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = useState({
        columns: configItem.structure,
        data: configItem.initialState,
    });

    const save = () => {
        let data = state.data.map((item) => {
            return {
                label: item.label,
                value: item.value
            }
        });
        setFieldValue(configItem.id, data);
        handleClose();
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <Icon>settings</Icon>
                {configItem.label}
            </Button>
            <Dialog fullWidth={true} maxWidth={"md"} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar style={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" style={{flex: 1}}>
                            {configItem.label}
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={save} aria-label="close">
                            <SaveIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <MaterialTable
                            title=""
                            columns={configItem.structure}
                            data={state.data}
                            options={{
                                actionsColumnIndex: -1,
                            }}
                            editable={{
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return {...prevState, data};
                                        });
                                    }),
                                onRowAdd: (newData) =>
                                    new Promise((resolve) => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data, newData];
                                            return {...prevState, data: data};
                                        });

                                    }),
                            }}
                        />
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};
