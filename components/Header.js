import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
	return (
		<header className="">
			<div>
				<HeaderItem title="HOME" Icon={HomeIcon} />
			</div>

			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/3/30/Hulu_logo_2017.svg"
				alt=""
				width={100}
				height={30}
			/>
		</header>
	);
}

export default Header;
