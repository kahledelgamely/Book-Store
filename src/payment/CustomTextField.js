import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: {lg :'28ch', md: "23ch", sm: "23ch"}, p:1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="First Name"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    multiline
                />

            </div>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Address Line 1"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="filled-textarea"
                    label="Email"
                    multiline
                />

            </div>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="City"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="filled-textarea"
                    label="Zip Code"
                    multiline
                />

            </div>
        </Box>
    );
}