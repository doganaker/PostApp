import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const commentData = [
  {
    postId: 3,
    id: 11,
    name: "Veronica's comment",
    email: "Veronica_Goodwin@timmothy.net",
    body: `ut dolorum nostrum id quia aut est
        fuga est inventore vel eligendi explicabo quis consectetur
        aut occaecati repellat id natus quo est
        ut blanditiis quia ut vel ut maiores ea`,
  },
  {
    postId: 3,
    id: 12,
    name: "Oswald's comment",
    email: "Oswald.Vandervort@leanne.org",
    body: `expedita maiores dignissimos facilis
        ipsum est rem est fugit velit sequi
        eum odio dolores dolor totam
        occaecati ratione eius rem velit`,
  },
];

const getAvatarAlt = (index) => {
  return commentData[index].email.substring(
    0,
    commentData[index].email.indexOf(".")
  );
};

const Comments = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
      <ListItem alignItems="center">
        <ListItemText primary="COMMENTS" />
      </ListItem>
      {commentData.map((comment, index) => {
        return (
          <Fragment key={comment.id}>
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
            <Divider variant="fullWidth" component="li" />
          </Fragment>
        );
      })}
    </List>
  );
};

export default Comments;
