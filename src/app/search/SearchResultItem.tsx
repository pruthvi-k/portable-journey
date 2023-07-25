import { GenresData, movieGenres } from "@/clients/tmdb";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  CircularProgressClasses,
  CircularProgressProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { PeopleCard } from "./PeopleCard";

export const SearchResultItem = async ({
  title = "",
  name = "",
  overview = "",
  media_type,
  release_date,
  first_air_date,
  vote_average,
  genre_ids,
  known_for_department,
  known_for
}: {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  known_for_department?:string;
  known_for?:[];
}) => {
  let mediaTypeColor:CircularProgressProps["color"];
  let mediaTitle;
  let mediaDate;
  let MediaChip = <></>;
  let mediaGenres:GenresData;
  switch(media_type) {
    case "movie":
      mediaTypeColor = "primary";
      mediaTitle = title;
      mediaDate = release_date;
      MediaChip = <Chip label="Movie" variant="outlined" color={mediaTypeColor} />;
      mediaGenres = await movieGenres();
      break;
    case "tv":
      mediaTypeColor = "secondary";
      mediaDate = first_air_date;
      mediaTitle = name;
      MediaChip = <Chip label="Tv" variant="outlined" color={mediaTypeColor} />;
      mediaGenres = await movieGenres();
      break;
    case "person":
      return <PeopleCard 
      name={name}
      known_for_department={known_for_department}
      known_for={known_for}
      />
    default:

      return <Typography>Search result is not a movie</Typography>;
  }

  const genreNames = genre_ids.map((genreId) => {
    if(!mediaGenres) return;
    const { name } =
    mediaGenres?.genres.find((currentGenre) => currentGenre.id === genreId) ?? {};
    return name;
  });

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={<Typography variant="h5">{mediaTitle}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            {(mediaDate && mediaDate!=="") && new Date(mediaDate).toLocaleDateString()}
          </Typography>
        }
        sx={{
          flexDirection: "row-reverse",
        }}
        avatar={
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={vote_average * 10}
              color={mediaTypeColor}
              thickness={4}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" fontWeight={600} component="div">
                {vote_average.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>{overview}</CardContent>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          {MediaChip}
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {genreNames.map((genreName) => (
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                {genreName}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
