import React from 'react'
import dog1 from "../images/dog1.png"
import dog2 from "../images/dog2.png"
import dog3 from "../images/dog3.png"
import dog4 from "../images/dog4.png"
import dog5 from "../images/dog5.png"
import dog6 from "../images/dog6.png"

export default function Home() {
  return (
	<section className='home'>
	<div className="left">
		<h1>Treat your pet <br /> to a luxurious <br /><span className='primc'>grooming <br /> experience</span></h1>
		<p>Luxury pet grooming tailored to pamper your furry companion with care, style, and comfort.</p>
		<button className='bkapt'>Book Appointment</button>
	</div>
	<div className="right">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
			<g weight="fill">
				<path fill="#fff" d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"/>
			</g>
		</svg>
		<img src={dog1} alt="dog" />
		<div className="dogbar">
			<div className="dogs">
				<div className="dog">
					<img src={dog2} alt="dog" />
				</div>
				<div className="dog" style={{marginLeft:"-1rem"}}>
					<img src={dog3} alt="dog" />
				</div>
				<div className="dog" style={{marginLeft:"-1rem"}}>
					<img src={dog4} alt="dog" />
				</div>
				<div className="dog" style={{marginLeft:"-1rem"}}>
					<img src={dog5} alt="dog" />
				</div>
				<div className="dog" style={{marginLeft:"-1rem"}}>
					<img src={dog6} alt="dog" />
				</div>
				<br />
			</div>
			<p>+456 Happy pets</p>
		</div>
	</div>
	</section>
  )
}
