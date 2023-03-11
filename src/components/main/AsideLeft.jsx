import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faGitlab, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function AsideLeft(){

	const [asideIcons, setAsideIcons] = useState(false);

	const changeColor = () =>{
		console.log(window.scrollY);
		if(window.scrollY >= 300){
			
			setAsideIcons(true);

		}else{
			setAsideIcons(false)
		}
	} 

	window.addEventListener('scroll', changeColor);

	return(
	<>
		{//icons container
		}
		<Icons>
		    <div  className={asideIcons? 'icons action' : 'icons'} >
			<a className={asideIcons? 'icon action' : 'icon'}  href="#">
			     <FontAwesomeIcon icon={faTwitter} />
			</a>
		    </div>
		    <div className={asideIcons? 'icons action' : 'icons'} >
			<a className={asideIcons? 'icon action' : 'icon'} href="#">
			     <FontAwesomeIcon icon={faGitlab} />
			</a>
		    </div>
		    <div className={ asideIcons? 'icons action':'icons'}>
			<a className={asideIcons? 'icon action' : 'icon'} href="#">
		             <FontAwesomeIcon icon={faGithubAlt} />
			</a>
		    </div>
		    <div className={ asideIcons? "icons action" : 'icons'}>
			<a className={asideIcons? 'icon action' : 'icon'} href="#">
		             <FontAwesomeIcon icon={faLinkedinIn} />
			</a>
		    </div>
		    <LigneVertical style={asideIcons? {backgroundColor: 'rgb(0, 48, 80)'} : {backgroundColor: '#FFFFFF'}  }>
		    </LigneVertical>
		</Icons>
	</>

	)

}


export default AsideLeft;

const Icons = styled.div`
	color: #FFFFFF;
	position: fixed;
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
	.icons.action {
		color: rgb(0, 48, 80);
	}

	.icons:hover{
		border-color: #FB7800;
	}
	.icons .icon:hover{
		color: #FB7800;
	}

	.icon{
		text-decoration: none;
		color: #FFFFFF;
		transition: 0.3s;
	}
	.icon.action{
		color: rgb(0, 48, 80);
	}
	.icon.action:hover{
		color: #FB7800;
	}
`
const LigneVertical = styled.div`
	background-color:#FFFFFF;
	width:2px;
	height:150px;
`
