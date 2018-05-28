import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}))(TableCell);

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const ResourceList = (props) => {
  const { classes, list, resource } = props;
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>{`${resource} name`}</CustomTableCell>
            <CustomTableCell numeric>ID</CustomTableCell>
            <CustomTableCell>Type</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(instance => (
            <TableRow className={classes.row} key={instance.id}>
              <TableCell component="th" scope="row">
                {instance.name}
              </TableCell>
              <TableCell numeric>{instance.id}</TableCell>
              <TableCell>{instance.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

ResourceList.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    table: PropTypes.string
  }).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })).isRequired,
  resource: PropTypes.string.isRequired
};

export default withStyles(styles)(ResourceList);
