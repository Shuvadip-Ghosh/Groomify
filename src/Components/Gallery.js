import React from 'react'
import dog1 from "../images/dog1.png"
import dog2 from "../images/dog2.png"
import dog3 from "../images/dog3.png"
import dog4 from "../images/dog4.png"
import dog5 from "../images/dog5.png"
import dog6 from "../images/dog6.png"
import dog7 from "../images/dog7.png"
import dog8 from "../images/dog8.png"
import dog9 from "../images/dog9.png"
import dog10 from "../images/dog10.png"
import dog11 from "../images/dog11.png"
export default function Gallery() {
	return (
		<>
			<section id="gallery">
				<div className="tag">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='currentColor'>
						<path d="M176,112,74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80Z" opacity="0.2" />
						<path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z" />
					</svg>

					<p>
						Transformations
					</p>
				</div>
				<h1>Smiles, styles,<br />and <span className="primc">happy tails</span></h1>
				<p>Take a peek at some of our recent transformations. From fluffy pups to sleek kitties, every pet leaves looking like a star.</p>
				<div className="gpics">
					<div className="img">
						<img src={dog1} alt="" />
					</div>
					<div className="img">
						<img src={dog2} alt="" />
					</div>
					<div className="img">
						<img src={dog3} alt="" />
					</div>
					<div className="img">
						<img src={dog4} alt="" />
					</div>
					<div className="img">
						<img src={dog5} alt="" />
					</div>
					<div className="img">
						<img src={dog6} alt="" />
					</div>
					<div className="img">
						<img src={dog7} alt="" />
					</div>
					<div className="img">
						<img src={dog8} alt="" />
					</div>
					<div className="img">
						<img src={dog9} alt="" />
					</div>
					<div className="img">
						<img src={dog10} alt="" />
					</div>
					<div className="img">
						<img src={dog11} alt="" />
					</div>
				</div>
			</section>
		</>
	)
}
