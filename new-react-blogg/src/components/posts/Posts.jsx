import "./postsStyles.css"
import Post from "../post/Post"

export default function Posts({ posts }) {
	return (
		<div className="posts">
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	)
}
