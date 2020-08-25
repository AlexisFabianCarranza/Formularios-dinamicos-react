import React from 'react';
import {Icon} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

export default ({info}) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon>{info.previewInfo.icon}</Icon>
      </div>

      <div className={styles.info}>
        <Typography className={styles.title}>
          {info.previewInfo.title}
        </Typography>
        <Typography className={styles.description}>
          {info.previewInfo.description}
        </Typography>
      </div>
      <Icon>toc</Icon>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'column',
    width: 300,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
  },
  icon: {
    paddingRight: 10,
  },
}));
