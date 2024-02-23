import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Logo } from "@components";
import { HOME_PATH } from "@core/routers";
import { Providers, LoginForm } from "./components";

const EntryScene = () => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <Grid item xs={12} sm={6} lg={4}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{
            width: "max-content",
            textTransform: "capitalize",
          }}
          onClick={() => navigate(HOME_PATH.root)}
        >
          Back
        </Button>

        <Card sx={{ padding: 2, marginTop: 3 }}>
          <CardContent component={Stack} direction="column" gap={3}>
            <Logo />

            <LoginForm />

            <Divider>
              <Typography variant="caption">
                Or you can continue with
              </Typography>
            </Divider>

            <Providers />

            <Typography variant="body2" alignSelf="center" marginTop={2}>
              Newbie?{" "}
              <Link href="#" underline="hover">
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EntryScene;
