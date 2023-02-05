import { Box, Modal, Button, Grid } from "@mui/material";
import Comments from "../comments/comments.component";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommentModal = ({ open, postId, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="flex-end"
        >
          <Grid item xs={12}>
            <Comments postId={postId} />
          </Grid>
          <Grid item justifyContent="flex-end" alignItems="flex-end" xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                handleClose();
              }}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CommentModal;
