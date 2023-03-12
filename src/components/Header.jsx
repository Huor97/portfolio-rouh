import React from 'react';
import Logo from './../img/logoR2.png';
import styled from 'styled-components';


function Header(){
	return (

		<>
		<HeaderWrap id="header">
			{//logo container
			}

			<DivLogo id="logo-container">
				<img src={Logo} alt="logo"/>
			</DivLogo>

			{//menu bar container
			}
			<DivMenuBar id="men-bar-container">
				<ul>
					<li><a href="#"> Home </a></li>
					<li><a href="#"> Compétence </a></li>
					<li><a href="../projet/ProjetMain.jsx"> Projet </a></li>
					<li><a href="#"> Contact </a></li>
				</ul>	
			</DivMenuBar>
		</HeaderWrap>
		</>

	)
}

export default Header;

const HeaderWrap = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #002951;
`

const DivLogo = styled.div`
	width: 50%;
	img{
		width: 14%;
		display: block;
		margin-left: 130px;
		margin-top:15px;
	}
`
const DivMenuBar = styled.div`
	display: flex;
	width: 50%;
	align-items: center;
	ul{
		width: 75%;
		display: flex;
		justify-content: space-between;
	}
	li{
		list-style: none;
	}
	ul li a{
		text-decoration: none;
		color: #FFFFFF;
		transition: 0.3S;
	}
	ul li a:hover{
		color: #FB7800;
	}
`
