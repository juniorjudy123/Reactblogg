import "./postStyles.css"
import { Link } from "react-router-dom"

export default function Post() {
	return (
		<div className="post">
			<img
				className="PostImg"
				src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="headerImg"
			></img>
			<div className="postInfo">
				<div className="PostCatgs">
					<span className="postCatg">Music</span>
					<span className="postCatg">Life</span>
				</div>
				<span className="postTitle">
					<Link className="link" to="/post/:postId">
						Lorem ipsum, dolor sit amet
					</Link>
				</span>
				<hr />
				<span className="postDate">1hour ago</span>
			</div>
			<p className="postDescpt">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
				excepturi illo aliquam voluptate sint necessitatibus accusantium
				corrupti impedit obcaecati consequatur quibusdam dolorem dolore nemo
				aperiam fugit ad, harum eos repellat.Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Tempore excepturi illo aliquam voluptate
				sint necessitatibus accusantium corrupti impedit obcaecati consequatur
				quibusdam dolorem dolore nemo aperiam fugit ad, harum eos repellatLorem
				ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi
				illo aliquam voluptate sint necessitatibus accusantium corrupti impedit
				obcaecati consequatur quibusdam dolorem dolore nemo aperiam fugit ad,
				harum eos repellatLorem ipsum dolor sit amet consectetur adipisicing
				elit. Tempore excepturi illo aliquam voluptate sint necessitatibus
				accusantium corrupti impedit obcaecati consequatur quibusdam dolorem
				dolore nemo aperiam fugit ad, harum eos repellat
			</p>
		</div>
	)
}
