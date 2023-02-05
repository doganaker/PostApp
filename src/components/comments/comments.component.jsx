import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import useFetch from "../../common/useFetch";
import { setData } from "../../redux/features/comments/commentsSlice";

const Comments = ({ postId }) => {
  const commentData = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (!error && data) {
    dispatch(setData(data));
  }

  const getAvatarAlt = (index) => {
    return commentData[index].email.substring(
      0,
      commentData[index].email.indexOf(".")
    );
  };
  return (
    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      <ListItem alignItems="center">
        <ListItemText primary="COMMENTS" />
      </ListItem>
      {commentData.map((comment, index) => {
        return (
          <Fragment key={comment.id}>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={getAvatarAlt(index)}
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={comment.name}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: "flex" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.email}
                    </Typography>
                    {comment.body}
                  </Fragment>
                }
              />
            </ListItem>
          </Fragment>
        );
      })}
    </List>
  );
};

export default Comments;
