import Image from "next/image";

function Header() {
	return (
		<header className="">
			<h1>This is the header</h1>
			<Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Hulu_logo_2017.svg" alt="" width={100} height={30} />
		</header>
	);
}

export default Header;
