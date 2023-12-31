import React from "react";
import useStyles from "./styles";
// import { green, purple, red } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { PurpleButton } from "./styles";
import { useDispatch } from "react-redux";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { deletePost } from "../../../actions/posts";
import { likePost } from "../../../api";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size='small'
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => ` # ${tag}`)}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant='body2'
          style={{ color: purple["A400"] }}
          component='p'
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          style={{ color: purple["A400"] }}
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize='small' style={{ color: purple["A400"] }} />{" "}
          &nbsp; Like {post.likeCount} &nbsp;
        </Button>
        <Button
          size='small'
          style={{ color: purple["A400"] }}
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize='small' style={{ color: purple["A400"] }} />{" "}
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
