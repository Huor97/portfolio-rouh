import React from 'react';
import styled from 'styled-components';

function ButtonGoProjet(){
	return(
	    <>
		<InputButton type="submit" value="🤟Voir Projet"/>
	    </>
	)
}

export default ButtonGoProjet;

const InputButton=styled.input`
	background-color: #172547;
	color: #FB7800;
	width: 172px;
	height: 49px;
	border-color: #05F9BE;
	border-radius: 23px;
	font-size: 20px;
	transition: 0.3s;
	:hover{
		background-color: #05F9BE;
		color: #172547;
		cursor: pointer;
	}
`
