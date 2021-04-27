import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardActions,
  CardHeader,
  Button,
  Grid,
  CardContent,
} from "@material-ui/core";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Test app
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Container style={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Test app" subheader="Fonts" />
              <CardActions>
                <Button onClick={() => setShow((show) => !show)}>
                  Show second card
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {show && (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  {["h1", "h2", "h3", "h4", "h5", "h6"].map((variant) => (
                    <Typography key={variant} variant={variant}>
                      {variant}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
