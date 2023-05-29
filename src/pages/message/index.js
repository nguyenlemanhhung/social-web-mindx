import React from "react";
import { Box, Container, Grid, Divider } from "@mui/material";
import ListMessages from "./listmessages";
import MessageContent from "./message-content";

const MessagePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ListMessages />
        </Grid>

        <Grid item xs={9}>
          <MessageContent />
        </Grid>
      </Grid>
    </Container>
  );
};
export default MessagePage;
