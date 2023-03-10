import React from 'react';
import styled from 'styled-components';

function AsideRight(){
	return(
	<>
		{//email
		}
		<WrapperAsideRight>
		    <div id="email">
			<a href="mailto:huor97ka@gmail.com">huor97ka@gmail.com</a>
		
		    </div>
		    <LigneVertical>
		    </LigneVertical>
		</WrapperAsideRight>
	</>
	)
}

export default AsideRight;

const WrapperAsideRight = styled.div`
	background-color:rgb(0, 41, 81);
	width: 12%;
	height: 620px;
	display: flex;
	flex-direction: column;	
	justify-content: end;
	align-items: center;
	#email{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 66px;
		
		transform: rotate(90deg);
	}

	#email a{
		text-decoration: none;	
		color: #FFFFFF;
		transition: 0.3s;
		margin-bottom: 4px;
	}
	#email a:hover{
		color: #FB7800;
	}
`
const LigneVertical= styled.div`
	background-color: #FFFFFF;
	width: 2px;
	height: 150px;
`
