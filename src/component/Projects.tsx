import React from 'react'
import port2 from '../img/port-2.jpg';
import workers2 from '../img/wworkers2.png';
import byteIt from '../img/byte.jpg'
import nikon from '../img/Nkn.png';


function projects() {
  return (
    <div>

<section id="portfolios" className="portfolio-section section-padding bd-bottom px-4 px-md-5" data-scroll-index="4">
			<div className="container">
				<div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
					<h2>Work Portfolios</h2>
				</div>


				<div className="portfolio-wrapper">

					<div className="row portfolio-items">

					<div className="col-md-4 col-sm-6 padding-10 single-item website website">
							<div className="portfolio-box">
								<img src={port2} alt="img"/>
								<div className="portfolio-content">
									<h3 className="text-center">
										<a href="#" type="button" className="img-popup mt-4" data-toggle="modal" data-target="#exampleModal"
											data-id="1">
										Library Xpress

											<span></span>
										</a>

										<div className="btns">
											<button type="button" className="btn default-btn btn-sm lh-1 p-2 mt-3" data-toggle="modal"
												data-target="#exampleModal" data-id="1">
												View Detail
											</button>
											<br />
											<a href="https://librarycenter-production.up.railway.app/" target="_blank"
												className="btn default-btn btn-sm lh-1 p-2 mt-3">
												Preview
											</a>
										</div>
									</h3>
								</div>
							</div>
						</div> 

						<div className="col-md-4 col-sm-6 padding-10 single-item website website">
							<div className="portfolio-box">
								<img src={workers2} alt="img"/>
								<div className="portfolio-content">
									<h3 className="text-center">
										<a href="#" type="button" className="img-popup mt-4" data-toggle="modal" data-target="#exampleModal"
											data-id="2">
											Willing Workers

											<span></span>
										</a>

										<div className="btns">
											<button type="button" className="btn default-btn btn-sm lh-1 p-2 mt-3" data-toggle="modal"
												data-target="#exampleModal" data-id="2">
												View Detail
											</button>
											<br />
											<a href="https://singular-biscotti-08deb7.netlify.app/" target="_blank"
												className="btn default-btn btn-sm lh-1 p-2 mt-3">
												Preview
											</a>
										</div>
									</h3>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 padding-10 single-item website website">
							<div className="portfolio-box">
								<img src={byteIt} alt="img"/>
								<div className="portfolio-content">
									<h3 className="text-center">
										<a href="#" type="button" className="img-popup mt-4" data-toggle="modal" data-target="#exampleModal"
											data-id="3">
										Byte it

											<span></span>
										</a>

										<div className="btns">
											<button type="button" className="btn default-btn btn-sm lh-1 p-2 mt-3" data-toggle="modal"
												data-target="#exampleModal" data-id="3">
												View Detail
											</button>
											<br />
											<a href="https://next13-experiment-beta.vercel.app/" target="_blank"
												className="btn default-btn btn-sm lh-1 p-2 mt-3">
												Preview
											</a>
										</div>
									</h3>
								</div>
							</div>
						</div>

						<div className="col-md-4 col-sm-6 padding-10 single-item website website">
							<div className="portfolio-box">
								<img src={nikon} alt="img"/>
								<div className="portfolio-content">
									<h3 className="text-center">
										<a href="#" type="button" className="img-popup mt-" data-toggle="modal" data-target="#exampleModal"
											data-id="4">
											Nikon D850

											<span></span>
										</a>

										<div className="btns">
											<button type="button" className="btn default-btn btn-sm lh-1 p-2 mt-3" data-toggle="modal"
												data-target="#exampleModal" data-id="4">
												View Detail
											</button>
											<br />
											<a href="https://vigilant-agnesi-39b86d.netlify.app/" target="_blank"
												className="btn default-btn btn-sm lh-1 p-2 mt-3">
												Preview
											</a>
										</div>
									</h3>
								</div>
							</div>
						</div> 
					</div>




					
				</div>
			</div>
		</section>


    </div>
  )
}

export default projects