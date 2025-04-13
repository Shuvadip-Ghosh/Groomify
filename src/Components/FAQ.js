import React from 'react'
import dog1 from "../images/dog1.png"

export default function FAQ() {
	return (
		<>
			<section id="FAQ">
				<dif className="Fleft">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
					</svg>
					<img src={dog1} alt="dog" />
				</dif>
				<div className="Fright">
					<div className="tag">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
							<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
						</svg>
						<p>
							FAQ
						</p>
					</div>
					<h1>Frequently <br />asked<span className="primc"> questions</span></h1>
					<div className="questions">
						<div className="qna">
							<div className="question">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
								</svg>
								<h3>
									How long does a grooming session take?
								</h3>
							</div>
							<div className="answer">
								<p>It depends on the package and your pet’s needs, but most sessions take 1.5–3 hours.</p>
							</div>
						</div>
						<div className="qna">
							<div className="question">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
								</svg>
								<h3>
									Do you groom cats as well as dogs?
								</h3>
							</div>
							<div className="answer">
								<p>Absolutely! We love pampering both cats and dogs.</p>
							</div>
						</div>
						<div className="qna">
							<div className="question">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
								</svg>
								<h3>
									What if my pet is nervous or anxious?
								</h3>
							</div>
							<div className="answer">
								<p>Our groomers are trained to handle nervous pets with patience and care. Let us know, and we’ll take extra time to make them comfortable.</p>
							</div>
						</div>
						<div className="qna">
							<div className="question">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
								</svg>
								<h3>
									Can I stay with my pet during grooming?
								</h3>
							</div>
							<div className="answer">
								<p>For safety and to keep your pet focused, we recommend waiting in our cozy lounge area.</p>
							</div>
						</div>
						<div className="qna">
							<div className="question">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
								</svg>
								<h3>
									How often should I groom my pet?
								</h3>
							</div>
							<div className="answer">
								<p>It depends on their breed and coat type, but most pets benefit from grooming every 4–6 weeks.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
