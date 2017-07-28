import React from 'react';

const About = (props) => (
	<div id="about">
    	<h2>{props.content.name}</h2>
    	<h3>{props.content.home}</h3>
    	<p>{props.content.desc}</p>
  	</div>
);

export default About;
