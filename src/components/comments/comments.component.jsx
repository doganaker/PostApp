import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../common/useFetch";
import { setData } from "../../redux/features/comments/commentsSlice";
import { Fragment } from "react";
import './comments.styles.scss'

const Comments = ({ postId }) => {
  const commentData = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (!error && data) {
    dispatch(setData(data));
  }

  return (
    <Fragment>
      <h1 className="title">COMMENTS</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 70 }}>Id</TableCell>
              <TableCell sx={{ width: 70 }}>Post Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commentData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.postId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Comments;
