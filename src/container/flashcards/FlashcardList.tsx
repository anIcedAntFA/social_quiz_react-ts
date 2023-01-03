import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FlashcardItem from './FlashcardItem';

function FlashcardList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <FlashcardItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FlashcardList;
