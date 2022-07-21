import React, {PropsWithChildren} from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { useStyles } from "../../assets/styles";

const TableContainer = (props: PropsWithChildren) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <>
      <Paper variant="outlined">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          className={classes.tableContainerHeading}
        >
          Review Your Order
        </Typography>
        <div style={{ padding: 15 }}>
          {children}
        </div>
      </Paper>
      <Divider style={{ marginBottom: "2em", marginTop: "2em" }} />
    </>
  );
};

export { TableContainer };
