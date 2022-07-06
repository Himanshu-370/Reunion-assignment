import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function MediaCard({ data }) {
  return (
    <>
      <Container maxWidth="lg">
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "10px",
            gridAutoRows: "minmax(100px, auto)",
          }}
        >
          {data.map((data, index) => {
            return (
              <Card sx={{ maxWidth: 345, margin: "2rem 0" }} key={index}>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.images}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.price}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {data.address}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    {data.bhk} {data.type}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
