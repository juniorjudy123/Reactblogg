import "./postStyles.css"

export default function Post({ post }) {
	return (
		<div className="post">
			<img
				className="PostImg"
				src="https://pbs.twimg.com/media/Fg0z1uIXgAAzsmw.jpg"
				alt="PostedImg"
			></img>

			<div className="postInfo">
				<div className="PostCatgs">
					<span className="postcats">music</span>
					<span className="postcats">Life</span>
				</div>

				<span className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</span>

				<hr />
				<span className="postDate">1hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
				necessitatibus nesciunt quidem culpa fugit? Deserunt animi vero culpa
				quia corrupti sed nostrum voluptas ipsam eos quidem? Quaerat cumque
				iusto quos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita necessitatibus nesciunt quidem culpa fugit? Deserunt animi vero
				culpa quia corrupti sed nostrum voluptas ipsam eos quidem?
			</p>
		</div>
	)
}
