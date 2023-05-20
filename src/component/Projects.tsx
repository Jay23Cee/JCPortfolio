import React from 'react'
import port2 from '../img/port-2.jpg';
import workers2 from '../img/wworkers2.png';
import byteIt from '../img/byte.jpg'
import nikon from '../img/Nkn.png';
import '../index.css'
import Card from './Card'


function projects() {
  return (
    <div>

<section id="portfolios " className="portfolio-section section-padding bd-bottom px-4 px-md-5" data-scroll-index="4">
			<div className="container">
				<div className="section-heading text-center mb-20 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
					<h2>Work Portfolios</h2>
				</div>


				<div className="@container">
  <div className="row portfolio-items">
    <main className="grid xl:grid-cols-2 justify-center content-center gap-5">
      <Card img={port2} title={"Library Xpress"} />
      <Card img={port2} title={"Library Xpress"} />
      <Card img={port2} title={"Library Xpress"} />
      <Card img={port2} title={"Library Xpress"} />
    </main>
  </div>
</div>
			</div>
		</section>


    </div>
  )
}

export default projects