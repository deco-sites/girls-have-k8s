// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $RSVPInput from "./islands/RSVPInput.tsx";
import * as $RSVPInputSpeaker from "./islands/RSVPInputSpeaker.tsx";
import * as $modals_CallForSpeakers from "./islands/modals/CallForSpeakers.tsx";
import * as $modals_LearnAbout from "./islands/modals/LearnAbout.tsx";
import * as $modals_SaveYourSpot from "./islands/modals/SaveYourSpot.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/RSVPInput.tsx": $RSVPInput,
    "./islands/RSVPInputSpeaker.tsx": $RSVPInputSpeaker,
    "./islands/modals/CallForSpeakers.tsx": $modals_CallForSpeakers,
    "./islands/modals/LearnAbout.tsx": $modals_LearnAbout,
    "./islands/modals/SaveYourSpot.tsx": $modals_SaveYourSpot,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
