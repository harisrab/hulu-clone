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
		<header className="flex flex-col p-5 sm:flex-row items-center w-screen justify-between h-auto mb-8">
			<div className="flex flex-grow justify-evenly max-w-2xl mb-5 sm:mb-0">
				<HeaderItem title="HOME" Icon={HomeIcon} />
				<HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
				<HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
				<HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
				<HeaderItem title="SEARCH" Icon={SearchIcon} />
				<HeaderItem title="ACCOUNT" Icon={UserIcon} />
			</div>

			<div className="relative h-8 w-20">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/3/30/Hulu_logo_2017.svg"
					alt=""
					quality={100}
					layout="fill"
					objectFit="contain"
				/>
			</div>
		</header>
	);
}

export default Header;
