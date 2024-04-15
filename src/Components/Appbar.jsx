import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Appbar() {

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 4,
        }}>
            <Button onClick={() => {
                window.location = "/notes";
            }}>
                <Typography variant={"h6"}>Notes</Typography>
            </Button>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    InputProps={{
                        endAdornment: (
                            <Button
                                variant="contained"
                                size="small"

                            >
                                Search
                            </Button>
                        ),
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <div style={{
                    marginLeft: 20,
                }}>
                    <Button
                        variant="contained"

                        onClick={() => {
                            window.location = "/signup";
                        }}
                    >
                        Sign Up
                    </Button>
                </div>
                <div style={{
                    marginLeft: 20
                }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            window.location = "/signin";
                        }}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Appbar;
