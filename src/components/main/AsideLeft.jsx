import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faGitlab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function AsideLeft(){
	return(
	<>
		{//icons container
		}
		<Icons>
		    <div class="icons">
			<a href="#">
			     <FontAwesomeIcon icon={faTwitter} />
			</a>
		    </div>
		    <div class="icons">
			<a href="#">
			     <FontAwesomeIcon icon={faGitlab} />
			</a>
		    </div>
		    <div class="icons">
			<a href="#">
		             <FontAwesomeIcon icon={faGithubAlt} />
			</a>
		    </div>
		    <div class="icons">
			<a href="#">
		             <FontAwesomeIcon icon={faLinkedinIn} />
			</a>
		    </div>
		    <LigneVertical>
		    </LigneVertical>
		</Icons>
	</>

	)

}


export default AsideLeft;

const Icons = styled.div`
	color: #FFFFFF;
	background-color:rgb(0, 41, 81);
	width: 12%;
	height: 620px;
	display: flex;
	flex-direction: column;
	justify-content: end ;
	align-items: center;
	
	.icons{
		width: 38px;
		height: 38px;
		border-radius:100%;
		border: solid 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
	}
	.icons a{
		text-decoration: none;
		color: #FFFFFF;
		transition: 0.3s;
	}
	.icons:hover{
		border-color: #FB7800;
	}
	.icons a:hover{
		color: #FB7800;
	}
`
const LigneVertical = styled.div`
	background-color:#FFFFFF;
	width:2px;
	height:150px;
`
