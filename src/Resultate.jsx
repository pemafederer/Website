import * as React from "react";
import dataResultate from "./data-resultate";
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import './App.css'


export default function Resultate() {

    function resultateContent(){
    
    }

    const [isToggleExpanded2, setIsToggleExpanded2] = React.useState(false);
    const [isToggleExpanded, setIsToggleExpanded] = React.useState(false);
    return (
        <div className="Resultate">
            <div className="resultate-title">
                <h1> Resultate</h1>
            </div>
            <div className="resultate-main-container">
                <div className="resultate-container">
                    <div className="resultate-container-header">
                        <div className="resultate-container-header-title">
                            <h1> Resultate 2023</h1>
                        </div>
                        <div className="Box-icon">
                            
                                <Box>
                                    {isToggleExpanded2 ? (

                                        <Icon onClick={() => setIsToggleExpanded2(!isToggleExpanded2)} className="Icon">remove_circle</Icon>
                                    ) : (<Icon onClick={() => setIsToggleExpanded2(!isToggleExpanded2)} className="Icon">add_circle</Icon>

                                    )}

                                </Box>
                            
                        </div>
                    </div>
                    <div className={`resultate-content ${isToggleExpanded2 ? 'show' : ''}`}>
                        {dataResultate.map(item => (
                                <div key={item.id}>
                                    <h4>{item.title}</h4>
                                </div>

                            )).slice(0, 12)}
                    </div>
                </div>
                <div className="resultate-container">
                    <div className="resultate-container-header">
                        <div className="resultate-container-header-title">
                            <h1> Resultate 2022</h1>
                        </div>
                        <div className="Box-icon">
                            {
                                <Box>
                                    {isToggleExpanded ? (
                                        <Icon onClick={() => setIsToggleExpanded(!isToggleExpanded)}>remove_circle</Icon>
                                    ) : <Icon onClick={() => setIsToggleExpanded(!isToggleExpanded)}>add_circle</Icon>

                                    }

                                </Box>
                            }

                        </div>
                    </div>
                    <div className={`resultate-content ${isToggleExpanded ? 'show' : ''}`}>
                        {dataResultate.map(item => (

                                <div key={item.id}>
                                    <h4>{item.title}</h4>
                                </div>

                            )).slice(12, 24)}
                    </div>
                </div>



            </div>
        </div>

    )
}