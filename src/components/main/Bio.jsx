import React from 'react';
import styled from 'styled-components';
import ButtonGoProjet from '../button/ButtonGoProjet';

function Bio(){
	return(
	    <>
		<Wrapper>
		    <div id="titre">
			<h1>Hello ! Moi c’est <a href="#"> Rouh  </a><spam>!</spam> 👋</h1>
		    </div>
		    <div id="sousTitre">
			<h2>
				Je construis des choses pour le web.
			</h2>
		    </div>
		    <div id="intro">
			<p>
				Je suis developpeur web généraliste et parfoit je fait du disigne
		des expériences digitales exceptionnelles. Actuelement je suis étudiant chez Ada tetch school pour me professionaliser.
			</p>
		    </div>
		    <div id="button">
			<ButtonGoProjet />
		    </div>
		    <div id="arrow">
			<svg class="arrows">
				<path class="a1" d="M0 0 L30 32 L60 0"></path>
				<path class="a2" d="M0 20 L30 52 L60 20"></path>
				<path class="a3" d="M0 40 L30 72 L60 40"></path>
			</svg>
		    </div>
		</Wrapper>
	    </>
	)
}

export default Bio;

const Wrapper = styled.div`
	background-color:rgb(0, 41, 81);
	width:88%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 620px;

	#titre{
		width: 70%
	}

	#titre h1{
		color: #FB7800;
		font-size: 40px;
	}

	#titre h1 a{
		color: #FFFFFF;
		transition: 0.3s;
	}
	spam{
		color: #FFFFFF;
	}

	#titre h1 a:hover{
		color: #FB7800;
	}

	#sousTitre{
		width: 70%;
	}
	#sousTitre h2{
		font-size: 36px;
	}

	#intro{
		width: 70%;
	}
	#intro p{
		color: #FB7800;
		font-size: 30px;
	}
	#button{
		width:70%;
		height: 60px;
		display: flex;
		justify-content: center;
	}
	
	#arrow{
		width: 70%;
		height: 60px;
		display: flex;
		justify-content: center;
	}
	.arrows {
		width: 60px;
		height: 72px;
		position: absolute;
		left: 50%;
		margin-left: -30px;
		bottom: 20px;
	}
	.arrows path {
		stroke: #2994D1;
		fill: transparent;
		stroke-width: 1px;	
		animation: arrow 2s infinite;
		-webkit-animation: arrow 2s infinite; 
	}
	@keyframes arrow{
		0% {opacity:0}
		40% {opacity:1}
		80% {opacity:0}
		100% {opacity:0}
	}

	@-webkit-keyframes arrow /*Safari and Chrome*/{
		0% {opacity:0}
		40% {opacity:1}
		80% {opacity:0}
		100% {opacity:0}
	}

	.arrows path.a1 {
		animation-delay:-1s;
		-webkit-animation-delay:-1s; /* Safari 和 Chrome */
	}

	.arrows path.a2 {
		animation-delay:-0.5s;
		-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
	}

	.arrows path.a3 {	
		animation-delay:0s;
		-webkit-animation-delay:0s; /* Safari 和 Chrome */
	}
`

