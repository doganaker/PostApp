import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import "./posts.styles.scss";
import { Box, Modal, Button, Grid } from "@mui/material";
import Comments from "../comments/comments.component";
import useFetch from "../../common/useFetch";
import { setData } from "../../redux/features/posts/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
    { field: "id", headerName: "Id", width: 70 },
    { field: "userId", headerName: "User Id", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "body",
      headerName: "Body",
      width: 200,
    },
    {
      field: "comments",
      headerName: "View Comments",
      width: 130,
      renderCell: (params) => {
        let postId = params.row.id;
        debugger;
        return (
          <Button
            variant="contained"
            onClick={() => {
              handleOpen(postId);
            }}
          >
            View
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
      justify="center"
    >
      <Grid item xs={6}>
        <div className="grid-container">
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Comments postId={postId}/>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Posts;
