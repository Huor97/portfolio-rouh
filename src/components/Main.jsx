import React from 'react';
import styled from 'styled-components';
import AsideLeft from '../components/main/AsideLeft';
import Bio from '../components/main/Bio';
import AsideRight from '../components/main/AsideRight';
import Competence from '../components/main/Competence';
import Connaissance from '../components/main/Connaissance';
function Main(){
	return(
		<>
			<HomeWrapper >
				<AsideLeft />
				<Bio />
				<AsideRight />
			</HomeWrapper>
			<ConnaissanceWrapper>
				<Connaissance />
			</ConnaissanceWrapper>
			<CompetenceWrapper>
				<Competence />
			</CompetenceWrapper>

		</>
	
	);
}


export default Main;

const HomeWrapper = styled.div`
	width: 100%;
	min-height: 620px;
	color: #FFFFFF;
	display: flex;
	justify-content: space-between;
`

const ConnaissanceWrapper = styled.div`
	width: 100%;
	min-height: 620px;
	 background: rgb(6,231,238);
	 background: linear-gradient(0deg, rgba(6,231,238,1) 0%, rgba(255,255,255,1) 57%); 
	display: flex;
	justify-content: center;
`

const CompetenceWrapper = styled.div`
	 background: rgb(255,255,255);
	 background: linear-gradient(0deg, rgba(255,255,255,1) 38%, rgba(6,231,238,1) 100%); 
	min-height: 620px;
	display: flex;
	justify-content: center;
`
