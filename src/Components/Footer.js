import React from 'react'

export default function Footer() {
	return (
		<>
			<div className="footer">
				<nav>
					<div className="left">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
							<g weight="fill">
								<path fill="#fff" d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z" />
							</g>
						</svg>
						Groomify
					</div>
					<div className="mid">
						<ul>
							<li><a href="#about">About</a></li>
							<li><a href="#services">Services</a></li>
							<li><a href="#gallery">Gallery</a></li>
							<li><a href="#FAQ">FAQs</a></li>
						</ul>
					</div>
				</nav>
				<nav>
					<div className="left fl2">
						<p className='d'>
							Design by <a href="https://www.framer.com/@justyna/?via=98syoxe&dub_id=EpbKtLu3nqphEWME" target="_blank" rel="noopener noreferrer">Justyna</a> in Framer · Developed in React by <a href="https://shuvadip-ghosh.vercel.app/" target="_blank" rel="noopener noreferrer">Shuvadip Ghosh</a> · © 2025 All rights reserved.
						</p>
						<p className='m'>Design by <a href="https://www.framer.com/@justyna/?via=98syoxe&dub_id=EpbKtLu3nqphEWME" target="_blank" rel="noopener noreferrer">Justyna</a> in Framer</p>
						<p className='m'>Developed in React by <a href="https://shuvadip-ghosh.vercel.app/" target="_blank" rel="noopener noreferrer">Shuvadip Ghosh</a> </p>
						<p className='m'>© 2025 All rights reserved.</p>
					</div>
					<div className="mid">
						<ul>
							<li>Privacy Policy</li>
							<li>Salon Policies</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	)
}
