import { GenresData, movieGenres } from "@/clients/tmdb";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  CircularProgressProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

export const PeopleCard = ({
  name = "",
  overview = "",
  known_for_department = "",
  known_for = [],
}: {
  id: number;
  name?: string;
  overview: string;
  known_for_department: string;
  known_for: [];
}) => {
  const knownfor = known_for.filter((k) => {
    if (k.name && k.name!==undefined && k.name!=="") {
      return k.name;
    }
  })
  console.log("knownfor", knownfor);
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {known_for_department}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
      />
      <CardContent>{knownfor.toString()}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Chip label="People" variant="outlined" color="success" />
        </Stack>
        </CardContent>
    </Card>
   
  );
};
