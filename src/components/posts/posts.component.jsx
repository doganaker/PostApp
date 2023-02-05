import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import "./posts.styles.scss";
import { Button, Grid } from "@mui/material";
import useFetch from "../../common/useFetch";
import { setData } from "../../redux/features/posts/postSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentModal from "../modal/modal.component";

const Posts = () => {
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!error && data) {
    dispatch(setData(data));
  }

  const handleOpen = (postId) => {
    setPostId(postId);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 70, flex: 1 },
    { field: "userId", headerName: "User Id", width: 70, flex: 1 },
    { field: "title", headerName: "Title", minWidth: 250, flex: 1 },
    {
      field: "body",
      headerName: "Body",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "comments",
      headerName: "View Comments",
      width: 130,
      flex: 1,
      renderCell: (params) => {
        let postId = params.row.id;
        return (
          <Button
            variant="text"
            onClick={() => {
              handleOpen(postId);
            }}
          >
            <VisibilityIcon />
          </Button>
        );
      },
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <div className="grid-container">
          <h1 className="title">POSTS</h1>
          <DataGrid
            rows={posts}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </Grid>
      <CommentModal open={open} postId={postId} handleClose={handleClose} />
    </Grid>
  );
};

export default Posts;
