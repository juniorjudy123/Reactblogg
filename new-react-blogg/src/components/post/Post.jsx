import { Link } from "react-router-dom"
import "./postStyles.css"

export default function Post({ post }) {
	return (
		<div className="post">
			{post.photo && (
				<img className="PostImg" src={post.photo} alt="PostedImg"></img>
			)}
			<div className="postInfo">
				<div className="PostCatgs">
					{post.categories.map((c) => (
						<span className="postcats">{c.name}</span>
					))}
				</div>
				<Link to={`/post/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	)
}
