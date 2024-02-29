import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { TrendingUp, TrendingDown, People } from "@mui/icons-material";

interface SummaryProps {
  header?: string;
  userCount?: string;
  increasedValue?: string;
  isIncreasing?: boolean;
}

export const Summary: React.FC<SummaryProps> = ({
  header = " Total Page Views",
  userCount = "12345",
  increasedValue = "50",
  isIncreasing = true,
}) => {
  return (
    <>
      <Card
        sx={{
          padding: 1,
          borderRadius: 3,
          backgroundColor: "transparent",
          width: { md: "31%" },
        }}
      >
        <CardContent>
          <Typography variant="caption" fontWeight={600} fontSize={15}>
            {header}
          </Typography>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2} mb={3}>
            <People />
            <Typography variant="caption" fontSize={19}>
              {userCount}
            </Typography>
            <Chip
              sx={{ borderRadius: 1.5 }}
              size="small"
              icon={isIncreasing ? <TrendingUp /> : <TrendingDown />}
              label={
                <Typography variant="caption" fontSize={12} fontWeight={600}>
                  {increasedValue}%
                </Typography>
              }
              color={isIncreasing ? "success" : "warning"}
            />
          </Box>
          {isIncreasing ? (
            <Typography
              variant="caption"
              fontWeight={500}
              fontSize={13}
              color="text.secondary"
            >
              You made an extra <b style={{ color: "#66bb6a" }}>36,000</b> this
              year
            </Typography>
          ) : (
            <Typography
              variant="caption"
              fontWeight={500}
              fontSize={13}
              color="text.secondary"
            >
              You made an extra <b style={{ color: "#ffa726" }}>18,000</b> this
              year
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};
