import React, {useEffect, useState} from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import MaterialTable from "material-table";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default ({configItem, handleChange, values}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = useState({
        columns: [
            {title: "Valor", field: 'value'},
            {title: "Nombre", field: 'label'},
        ],
        data: [],
    });

    useEffect(() => {
        populate();
    }, []);

    const populate = async () => {
        try {
            let newResultsJson = [];
            values[configItem.id].forEach((usr) => {
                newResultsJson.push({
                    username: usr.username,
                    name: usr.name,
                    email: usr.email,
                    status: usr.deleted === 'false' ? 1 : 2,
                    id: usr._id,
                    lang: usr.lang
                });
            });

            setState((state) => ({
                columns: state.columns,
                data: newResultsJson,
            }));
        } catch (exception) {
            console.error(exception);
        }
    };

    const syncRowUpdate = (newData, oldData) => {
        const updatedIndex = oldData.tableData.id;
        const data = [...state.data];
        const id = data[updatedIndex].id;
        const newInfo = newData;

        if (newData.status === '2') {
            console.log("eliminar ", data[updatedIndex].id);
            newData.deleted = 'true';
        } else newData.deleted = 'false';

        console.log("actualizar ", id, newInfo);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <Icon>settings</Icon>
                {configItem.label}
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar style={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" style={{flex: 1}} >
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <MaterialTable
                            title="USERS_TABLE_TITLE"
                            columns={state.columns}
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
                                        syncRowUpdate(newData, oldData);
                                    }),
                            }}
                        />
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};
