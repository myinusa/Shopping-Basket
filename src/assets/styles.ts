import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  h5: {
    color: "grey",
    fontWeight: "bold",
  },
  h5Total: {
    color: "black",
    fontWeight: "bold",
  },
  root: {
    "& .MuiTableCell-head": {
      // color: "white",
      backgroundColor: "blue",
    },
  },
  spaceBetween: { display: "flex", justifyContent: "space-between" },
  mainBox: { margin: 20, marginTop: 10, width: "95%", height: "90%", paddingTop: 50 },
  divider: { marginBottom: "2em", marginTop: "2em" },
  tableContainerHeading: {
    backgroundColor: "lightgray",
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tableInput: {
    width: "10%",
    height: 21,
    textAlign: "center",
    marginRight: 14,
    fontSize: 16,
  },
  subtractButton: {
    backgroundColor: "orange",
    fontWeight: "bold",
    minWidth: 6,
    maxWidth: 6,
    marginRight: 5,
  },
});

export { useStyles };