import './leftbar.css';
import {
	RssFeed,
	Chat,
	SlowMotionVideo,
	Group,
	Bookmarks,
	Help,
	Work,
	Event,
	School,
} from '@material-ui/icons';
import { Users } from '../../dummyData.js';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Leftbar() {
	return (
		<div className="leftbar">
			<div className="leftbarWrapper">
				<ul className="leftbarList">
					<li className="leftbarListItem">
						<RssFeed className="leftbarIcon" />
						<span className="leftbarListItemText">Feed</span>
					</li>
					<li className="leftbarListItem">
						<Chat className="leftbarIcon" />
						<span className="leftbarListItemText">Chats</span>
					</li>
					<li className="leftbarListItem">
						<SlowMotionVideo className="leftbarIcon" />
						<span className="leftbarListItemText">Videos</span>
					</li>
					<li className="leftbarListItem">
						<Group className="leftbarIcon" />
						<span className="leftbarListItemText">Groups</span>
					</li>
					<li className="leftbarListItem">
						<Bookmarks className="leftbarIcon" />
						<span className="leftbarListItemText">Bookmarks</span>
					</li>
					<li className="leftbarListItem">
						<Help className="leftbarIcon" />
						<span className="leftbarListItemText">Questions</span>
					</li>
					<li className="leftbarListItem">
						<Work className="leftbarIcon" />
						<span className="leftbarListItemText">Jobs</span>
					</li>
					<li className="leftbarListItem">
						<Event className="leftbarIcon" />
						<span className="leftbarListItemText">Events</span>
					</li>
					<li className="leftbarListItem">
						<School className="leftbarIcon" />
						<span className="leftbarListItemText">Courses</span>
					</li>
				</ul>
				<button className="leftbarButton">Show more</button>
				<hr className="leftbarHr" />
				<ul className="leftbarFriendList">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
}
