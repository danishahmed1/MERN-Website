import { Button, Table, TableHead, TableRow, TableCell, TableBody, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    border: "1px solid rgba(224, 224, 224, 1)",
  },
  write: {
    margin: 20,
    marginTop: "50",
    width: "85%",
    background: "#6495ED",
    color: "#fff",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Categories = () => {
  const css = useStyle();
  return (
    <>
      <Link to="/create" className={css.link}>
        <Button variant="contained" className={css.write}>
          Create Blog
        </Button>
      </Link>
      <Table className={css.table}>
        <TableHead>
          <TableCell>All Catogries</TableCell>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
