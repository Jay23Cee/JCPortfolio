import React from 'react'
import "../index.css"
function Nav() {
  return (
    <div>

<div className="dl-fixed-sidebar dl-sidebar-left">
		<div className="dl-header-container">
			<div className="logo">
				<h1 className="d-none d-lg-block lh-1 mb-0 mt-0">
					<a className="lh-1" href="index.html">JACKSON </a>
				</h1>
				<p className="d-none d-lg-block small mb-0">FULL STACK DEVELOPER </p>
			</div>
			<div className="dl-burger-menu">
				<div className="dl-line-menu dl-line-half dl-first-line"></div>
				<div className="dl-line-menu"></div>
				<div className="dl-line-menu dl-line-half dl-last-line"></div>
			</div>
			<nav className="dl-menu-fixed">
				<ul className="list-unstyled">
					<li><a className="pl-3" href="#home" data-scroll-nav="0">Home</a></li>
					<li><a className="pl-3" href="#skills" data-scroll-nav="5">Skills</a></li>
				
					<li><a className="pl-3" href="#portfolios" data-scroll-nav="4">Portfolios</a></li>
					<li><a className="pl-3" href="#contact" data-scroll-nav="6">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
    </div>
  )
}

export default Nav