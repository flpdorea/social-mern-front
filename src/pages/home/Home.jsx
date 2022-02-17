import Topbar from '../../components/topbar/Topbar.jsx';
import Leftbar from '../../components/leftbar/Leftbar.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import './home.css';

export default function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Leftbar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}
