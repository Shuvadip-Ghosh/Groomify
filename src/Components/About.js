import React from 'react'
import bg_abt from "../images/abt-bg.png"

export default function About() {
	return (
		<section id='about'>
			<div className="abt-cont">
				<div className="lt">
					<div className="tag">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
							<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
						</svg>
						About Us
					</div>
					<h1><span className="primc">Groomify </span>pet<br /> grooming salon</h1>
					<p>For over 12 years, we’ve been dedicated to making pets look fabulous and feel loved. Because to us, your pet isn’t just a client – they’re family.</p>
				</div>
				<div className="rt">
					<div className="expcrd">
						<h1 className='primc'>12+</h1>
						<p>Years experience</p>
					</div>
					<div className="expcrd">
						<h1 className='primc'>456+</h1>
						<p>Pampered pets</p>
					</div>
					<div className="expcrd">
						<h1 className='primc'>100%</h1>
						<p>Positive reviews</p>
					</div>
					<div className="expcrd">
						<h1 className='primc'>1899L+</h1>
						<p>Of shampoo used</p>
					</div>
				</div>
			</div>
			<img className='bg-img' src={bg_abt} alt="" />
		</section>
	)
}
