import React from 'react';
import Logo from './../img/logoRFooter.png';
import ButtonGoContact from './button/ButtonGoContact';
import styled from 'styled-components';

function Footer(){
	return(
	    <>
		<Wrapper>
		    <div id="contact">
			<h3>Démarrer un projet</h3>
			<p>
			    Intéressé à travailler ensemble ? Nous devrions fixer un moment pour discuter. J'achèterai le café.
			</p>
			<ButtonGoContact />
		    </div>
		    <div id="lisence">
			<img src={Logo} alt="logo" />
			<p>Vivre, apprendre et se perfectionner un jour après l'autre. </p>
		    </div>
		</Wrapper>
	    </>
	)
}

export default Footer;

const Wrapper = styled.div`
	width: 100%;
	height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
 	background: rgb(6,231,238);
 	background: linear-gradient(0deg, rgba(6,231,238,1) 33%, rgba(255,255,255,1) 80%); 
	
	#contact{
		margin-top: 70px;
		border: solid 1px;
		border-radius: 10px;
		width: 80%;
		height: 30%;
		background-color: rgb(0, 48, 80);
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	#lisence{
		width: 80%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#lisence img{
		width: 70px;
		filter: grayscale(28%) brightness(101%) opacity(94%) contrast(105%) drop-shadow(0px 0px 10px rgba(0,0,0,0.44));
		-webkit-filter: grayscale(28%) brightness(101%) opacity(94%) contrast(105%) drop-shadow(0px 0px 10px rgba(0,0,0,0.44));
		-moz-filter: grayscale(28%) brightness(101%) opacity(94%) contrast(105%) drop-shadow(0px 0px 10px rgba(0,0,0,0.44));
	}
`
