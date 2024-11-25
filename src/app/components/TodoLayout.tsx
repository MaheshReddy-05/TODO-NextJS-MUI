import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
const TodoLayout = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    <Typography variant="h3" gutterBottom>Todo</Typography>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>

                </Grid>

            </Grid>
        </>
    );
}

export default TodoLayout;