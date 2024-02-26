import { Stack, TextField, Box, Typography, Button, Link } from "@mui/material";
import { Controller } from "react-hook-form";

import { useAuth } from "../hooks/use-auth.hook";

export const LoginForm = () => {
  const { control, handleSubmit, isValid, isSubmitted, onSubmit } = useAuth();
  const isFormInvalid = !isValid && isSubmitted;

  return (
    <Stack component="form" gap={2} marginTop={2}>
      {isFormInvalid && (
        <Typography variant="caption" color="error">
          Incorrect Username or Password
        </Typography>
      )}

      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <TextField
            label="Username or Email"
            size="small"
            error={isFormInvalid}
            {...field}
          />
        )}
      />

      <Box display="flex" flexDirection="column">
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="Password"
              size="small"
              type="password"
              error={isFormInvalid}
              {...field}
            />
          )}
        />

        <Typography
          component={Link}
          variant="caption"
          href="#"
          underline="hover"
          marginTop="4px"
          alignSelf="end"
        >
          Forgot Password?
        </Typography>
      </Box>

      <Button
        variant="contained"
        size="medium"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Stack>
  );
};
