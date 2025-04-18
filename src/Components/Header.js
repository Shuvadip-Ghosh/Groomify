import React,{useRef} from 'react'

export default function Header() {
	var el = useRef(null);
	var eel = useRef(null);
	function toggle_nav() {
		el.current.classList.toggle("mido");
		eel.current.classList.toggle("mido");
	}
	return (
		<>
			<nav>
				<div className="left">
					<div className="ll">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false">
							<g weight="fill">
								<path fill="#fff" d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z" />
							</g>
						</svg>
						Groomify
					</div>
					<svg onClick={()=>{toggle_nav();}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
					</svg>
				</div>
				<div className="mid" ref={el}>
					<ul>
						<li><a href="#about">About</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#gallery">Gallery</a></li>
						<li><a href="#FAQ">FAQs</a></li>
					</ul>
				</div>
				<div className="right" ref={eel}>
					<button className='bkapt'>Book Appointment</button>
				</div>
			</nav>
		</>
	)
}
