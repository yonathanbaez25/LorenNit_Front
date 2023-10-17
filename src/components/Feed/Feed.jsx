import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import axios from "axios";
// import { Posts } from "../../../utils/posts";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const URL = "http://localhost:8800/api";

  useEffect(() => {
    const postFetch = async () => {
      const res = username
        ? await axios.get(`${URL}/posts/profile/` + username)
        : await axios.get(`${URL}/posts/timeline/6501ef9928907cfced0a505b`);
      setPosts(res.data);
      console.log(posts);
    };

    postFetch();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
