function HeaderItem({ title, Icon }) {
	return (
		<div className="flex flex-col cursor-pointer items-center group w-12 sm:w-20 hover:text-white">
			<Icon className="h-8 mb-1 group-hover:animate-bounce" />

			<h1 className="opacity-100 group-hover:opacity-100 tracking-widest">
				{title}
			</h1>
		</div>
	);
}

export default HeaderItem;
