import "./singlePostStyles.css"

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
					alt="singlePostImg"
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author:<b>Benoy</b>
					</span>
					<span className="singlePostDate"> 1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
					reiciendis eum doloremque sapiente culpa, doloribus quisquam similique
					sunt iste consectetur repellendus, alias asperiores enim quas corporis
					libero cum, illum atque.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Impedit reiciendis eum doloremque sapiente culpa,
					doloribus quisquam similique sunt iste consectetur repellendus, alias
					asperiores enim quas corporis libero cum, illum atque.Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Impedit reiciendis eum
					doloremque sapiente culpa, doloribus quisquam similique sunt iste
					consectetur repellendus, alias asperiores enim quas corporis libero
					cum, illum atque.
				</p>
			</div>
		</div>
	)
}
