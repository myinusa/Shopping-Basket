import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useStyles } from "../../assets/styles";
import { TableProps } from "../../types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "lightgray",
    fontSize: 16,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  // [`&.${tableRowClasses.root}`]: {
  //   height: "40px",
  // },
}));

function TableElement({
  data,
  columns,
  handleChange,
  handleSubtractQuantity,
  handleAddQuantity,
  handleDelete,
}: TableProps) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table size="small" aria-label="customized table">
        <TableHead className={classes.root}>
          <TableRow>
            {columns.map((column: string, id) => (
              <StyledTableCell key={id}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.product}
              </StyledTableCell>
              <StyledTableCell>{`£${row.price}`}</StyledTableCell>
              <StyledTableCell>
                <input
                  type={"text"}
                  name={row.product}
                  id={`${row.id}`}
                  value={data[row.id].quantity}
                  onChange={handleChange}
                  className={classes.tableInput}
                />
                <Button
                  variant="contained"
                  name={`${row.product}-minusButton`}
                  onClick={() => handleSubtractQuantity(row)}
                  style={{
                    backgroundColor: "orange",
                    fontWeight: "bold",
                    minWidth: 6,
                    maxWidth: 6,
                    height: 30,
                    boxShadow: "none",
                    marginRight: 5,
                  }}
                >
                  -
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleAddQuantity(row)}
                  style={{
                    backgroundColor: "#55D8C1",
                    fontWeight: "bold",
                    boxShadow: "none",
                    minWidth: 6,
                    height: 30,
                    maxWidth: 6,
                  }}
                >
                  +
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                {`£${Number(row.price * row.quantity).toFixed(2)}`}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "red",
                    fontWeight: "bold",
                    fontSize: 14,
                    boxShadow: "none",
                  }}
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { TableElement };
