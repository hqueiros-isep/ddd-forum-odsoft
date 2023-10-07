
import React from 'react';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
  isToday: boolean;
}

const PostRow: React.FC<PostRowProps> = (props) => (
  <div className={` ${props.isToday ? 'post-row-today' : 'post-row'}`}>
    <Points
      onUpvoteClicked={() => props.onUpvoteClicked()}
      onDownvoteClicked={() => props.onDownvoteClicked()}
      points={props.points}
      isLoggedIn={props.isLoggedIn}
    />
    <PostMeta {...props} />
  </div>
)

export default PostRow;