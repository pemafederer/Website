import * as React from "react";
import dataResultate from "./data-resultate";
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import './App.css';

export default function Resultate() {
    const [isToggleExpanded2024, setIsToggleExpanded2024] = React.useState(false);
    const [isToggleExpanded2023, setIsToggleExpanded2023] = React.useState(false);
    const [isToggleExpanded2022, setIsToggleExpanded2022] = React.useState(false);

    return (
        <div className="Resultate">
            <div className="resultate-title">
                <h1>Resultate</h1>
            </div>
            <div className="resultate-main-container">
                <div className="resultate-container">
                    <div className="resultate-container-header">
                        <div className="resultate-container-header-title">
                            <h1>2024</h1>
                        </div>
                        <div className="Box-icon">
                            <Box>
                                {isToggleExpanded2024 ? (
                                    <Icon onClick={() => setIsToggleExpanded2024(!isToggleExpanded2024)} className="Icon">remove_circle</Icon>
                                ) : (
                                    <Icon onClick={() => setIsToggleExpanded2024(!isToggleExpanded2024)} className="Icon">add_circle</Icon>
                                )}
                            </Box>
                        </div>
                    </div>
                    <div className={`resultate-content ${isToggleExpanded2024 ? 'show' : ''}`}>
                        {dataResultate.slice(0, 9).map((item, index) => (
                            <div key={index}>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="resultate-container">
                    <div className="resultate-container-header">
                        <div className="resultate-container-header-title">
                            <h1>2023</h1>
                        </div>
                        <div className="Box-icon">
                            <Box>
                                {isToggleExpanded2023 ? (
                                    <Icon onClick={() => setIsToggleExpanded2023(!isToggleExpanded2023)} className="Icon">remove_circle</Icon>
                                ) : (
                                    <Icon onClick={() => setIsToggleExpanded2023(!isToggleExpanded2023)} className="Icon">add_circle</Icon>
                                )}
                            </Box>
                        </div>
                    </div>
                    <div className={`resultate-content ${isToggleExpanded2023 ? 'show' : ''}`}>
                        {dataResultate.slice(9, 18).map((item, index) => (
                            <div key={index}>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="resultate-container">
                    <div className="resultate-container-header">
                        <div className="resultate-container-header-title">
                            <h1>2022</h1>
                        </div>
                        <div className="Box-icon">
                            <Box>
                                {isToggleExpanded2022 ? (
                                    <Icon onClick={() => setIsToggleExpanded2022(!isToggleExpanded2022)}>remove_circle</Icon>
                                ) : (
                                    <Icon onClick={() => setIsToggleExpanded2022(!isToggleExpanded2022)}>add_circle</Icon>
                                )}
                            </Box>
                        </div>
                    </div>
                    <div className={`resultate-content ${isToggleExpanded2022 ? 'show' : ''}`}>
                        {dataResultate.slice(18, 29).map((item, index) => (
                            <div key={index}>
                                <h4>{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}