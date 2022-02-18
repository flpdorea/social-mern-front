import Topbar from '../../components/topbar/Topbar.jsx';
import Leftbar from '../../components/leftbar/Leftbar.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import './profile.css';

export default function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Leftbar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="assets/post/3.jpeg"
								alt=""
							/>
							<img
								className="profileUserImg"
								src="assets/person/7.jpeg"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">John Doe</h4>
							<span className="profileInfoDesc">
								Hello my friends
							</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
}
