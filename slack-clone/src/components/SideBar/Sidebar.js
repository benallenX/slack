import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineOutlined'
// import db from '../fire'

const Sidebar = () => {
    // const [channels, setChannels] = useState([])

    // useEffect(() => {
    //     db.collection('rooms').onSnapshot(snapshot => (
    //         setChannels(
    //             snapshot.docs.map(doc => ({
    //                 id: doc.id,
    //                 name: doc.data().name
    //             }))
    //         )
    //     ))
    // })

    return (
       <Container>
            <WorkSpaceContainer>
                <Name>
                    Dev Inc.
                </Name>
                <NewMessage>
                    <AddCircleIcon />
                </NewMessage>
            </WorkSpaceContainer>
       </Container>
    )
}

export default Sidebar

const Container = styled.div ` 
display:flex;
background-color: #3F0E40; 
`

const WorkSpaceContainer = styled.div `  
color:white;
height:65px;
display:flex;
align-items:center;
padding-left:20px;
justify-content:space-between;
border-bottom: 1px solid #532753;
`

const Name = styled.div `  


`

const NewMessage = styled(AddCircleIcon) `  
height:36px;
width:36px;
background-color:white;
color:#3F0E40;
fill:#3F0E40;
justify-content:center;
align-items:center;
border-radius: 50%;
margin-left:150px;

&:hover {
    background-color: gray;
}
`