import React from "react";
import { render, waitFor, fireEvent, cleanup } from "@testing-library/react";

global.React = React;
global.render = render;
global.waitFor = waitFor;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
