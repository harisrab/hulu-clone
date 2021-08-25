function HeaderItem({ title, Icon }) {
	return (
		<div className="flex flex-col cursor-pointer items-center justify-center group w-12 sm:w-20 hover:text-white">
			<Icon className="h-7 mb-1 hover:animate-bounce" />

			<h1 className="opacity-0 group-hover:opacity-100 tracking-widest">
				{title}
			</h1>
		</div>
	);
}

export default HeaderItem;
