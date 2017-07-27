import React from 'react';

const About = (props) => (
	<div id="about">
    	<h2>{props.user.name}</h2>
    	<h3>{props.user.home}</h3>
    	<p>{props.user.desc}</p>
  	</div>
);

export default About;
