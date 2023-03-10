import React from 'react';
import Competences from './Competences';
import styled from 'styled-components';
import {faFigma} from '@fortawesome/free-brands-svg-icons';
import {faCode, faTerminal} from '@fortawesome/free-solid-svg-icons';

const competences=[
	{
	    icons: faFigma,
	    titre:"Designe",
	    p1:"realiser une maquete",
	    sousTitre1:"J'aime dessiner:",
	    p2:"UX, UI, Web, Apps, Logos",
	    sousTitre2:"Outils de conception:",
	    p3:['Adobe', 'Figma', 'Canva', 'Modélisation:UML']
	},
	{
	    icons: faCode,
	    titre:"Frontend Developpeur",
	    p1:"Analyser les besoins du client",
	    sousTitre1:"Je veux coder :",
	    p2:"HTML, CSS, JavaScript, Bootstrap",
	    sousTitre2:"Outils de Dev et organisation :",
	    p3:['VsCode', 'Trello', 'Miro', 'CMS:WordPress']
	},
	{
	    icons: faTerminal,
	    titre:"Backend Developpeur",
	    p1:"Concevoir et développer les applications",
	    sousTitre1:"Je veux coder :",
	    p2:"SQL (MySQL, Workbench)PHP, JAVA, Node",
	    sousTitre2:"Outils de Dev",
	    p3:['Vim', 'Git, GitHub', 'Système:Debian', 'Agilité:Scrum']
	}
]

function Competence(){
	return(
	    <>
		<Wrapper>
		    {competences.map((competenc, index) =>(
		         <Competences
			    key={index}
			    icons={competenc.icons}
			    titre={competenc.titre}
			    p1={competenc.p1}
			    sousTitre1={competenc.sousTitre1}
			    p2={competenc.p2}
			    sousTitre2={competenc.sousTitre2}
			    p3={competenc.p3}
			 />
		    ))}
		</Wrapper>
	    </>
	)
}

export default Competence;

const Wrapper = styled.div`
	width: 80%;
	background-color: #FFFFFF;
	height: 600px;
	display: flex;
	border: solid 1px #FFFFFF;
	box-shadow: 1px 2px 21px 6px rgba(0,0,0,0.41);
	-webkit-box-shadow: 1px 2px 21px 6px rgba(0,0,0,0.41);
`
