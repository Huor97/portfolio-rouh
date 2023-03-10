import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Competences(props){
	return(
	    <>
		<Wrapper>
		    <div class="icons">
			<FontAwesomeIcon class="icon" icon={props.icons} />
		    </div>
			<h2>{props.titre}</h2>
			<p>{props.p1}</p>
			<h3>{props.sousTitre1}</h3>
			<p>{props.p2}</p>
			<h3>{props.sousTitre2}</h3>
			
			<ul>
			{
				props.p3.map(tabP => <li> {tabP}</li>)
			}
			</ul>
		</Wrapper>

	    </>
	)
}

export default Competences;

const Wrapper=styled.div`
	width: 35%;
	height: 100%;
	border-right: solid 1px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	:last-child{
		border: none;
	}

	.icons{
		background-color: #FB7800;
		border: solid 1px #FFF;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
	}
	.icons .icon{
		width: 50px;
		height: 50px;
	}

	h2{
		margin-bottom: 0;
	}

	h3{
		color: #0080FF;
		margin-bottom: -13px;
	}

	ul{
		width: 50%;
		height: 145px;
		padding-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	ul li {
		list-style: none;
	}
`
