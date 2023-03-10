import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function AsideRight(){
	
	const [asideMail, setAsideMail] = useState(false);

	const changeColor = () =>{
		if(window.scrollY >= 300){
			setAsideMail(true);
		}else{
			setAsideMail(false);
		}
	}

	window.addEventListener('scroll',changeColor);

	return(
	<>
		{//email
		}
		<WrapperAsideRight>
		    <div id="email">
			<a className={asideMail ? 'asideMaile active': 'asideMaile'} href="mailto:huor97ka@gmail.com">huor97ka@gmail.com</a>
		
		    </div>
		    <LigneVertical id="ligneVertical" style={asideMail ? {backgroundColor:"rgb(0, 41, 81)"} : {backgroundColor:"#FFFFFF"} }>
		    </LigneVertical>
		</WrapperAsideRight>
	</>
	)
}

export default AsideRight;

const WrapperAsideRight = styled.div`
	position: fixed;
	width: 12%;
	height: 620px;
	margin-left: 90%;
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

	#email .asideMaile {
		text-decoration: none;	
		color: #FFFFFF;
		transition: 0.3s;
		margin-bottom: 4px;
	}
	#email .asideMaile.active{
		color: rgb(0, 41, 81);
		transition: 0.3s;
	}
	
	#email .asideMaile.active:hover{
		color: #FB7800;
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
