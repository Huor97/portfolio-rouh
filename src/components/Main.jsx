import React from 'react';
import styled from 'styled-components';
import AsideLeft from '../components/main/AsideLeft';
import Bio from '../components/main/Bio';
import AsideRight from '../components/main/AsideRight';
function Main(){
	return(
		<>
			<HomeWrapper id='home'>
				<AsideLeft />
				<Bio />
				<AsideRight />
			</HomeWrapper>

		</>
	
	);
}


export default Main;

const HomeWrapper = styled.div`
	background-color: blue;
	width: 100%;
	min-height: 620px;
	color: #FFFFFF;
	display: flex;
	justify-content: space-between;
`
