import Feed from "@components/Feed"


const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Keep grinding
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">You'll Never Walk Alone</span>
			</h1>
			<p className="desc text-center">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, atque quia culpa exercitationem quo quam sunt numquam ex asperiores! Mollitia architecto aperiam rerum obcaecati, pariatur nihil sequi modi dolores reiciendis.
			</p>

			<Feed/>
		</section>
	)
}

export default Home