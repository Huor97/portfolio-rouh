import React from 'react';
import styled from 'styled-components';
import imagDev from '../../img/4799410.jpg';
function Connaissance(){
	return(
	    <>
		<Wrapper>
		    <div id="image">
			<img src={imagDev} />
		    </div>
		    <div id="presentation">
			
	                <h2>
		            Faisons connaissance :)
			</h2>
			
			<p>
			    De nature curieuse, j’apprécie analyser, concevoir et organiser mon activité ainsi 
	                    qu'exprimer ma créativité dans un cadre favorisant la production d'un travail de 
	                    qualité.
			</p>
		    </div>
		</Wrapper>
	    </>
	)
}
export default Connaissance;

const Wrapper= styled.div`
	width: 80%;
	#image{
		width: 100%;
		display: flex;
		justify-content: center;
	}

	#image img{
		width: 35%;
	}

	#presentation{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
	}
	#presentation h2{
		font-size: 36px;
		width: 50%;
		text-align: center;
		margin: 0;
		color: rgb(0, 48, 80);
	}
	#presentation p{
		width: 90%;
		font-size: 30px;
		text-align: center;
		color: rgb(0, 48, 90);
	}
	}
`
