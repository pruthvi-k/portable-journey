import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export const PeopleCard = ({
  name = "",
  known_for_department = "",
  known_for = [],
}: {
  id: number;
  name?: string;
  overview: string;
  known_for_department: string | undefined;
  known_for: [] | undefined;
}) => {
  let knownfor: string[] = [];
  known_for.forEach((k) => {
    if (k.name && k.name!==undefined && k.name!=="") {
      knownfor.push(k.name);
    }
  })
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
