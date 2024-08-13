import { ReactNode } from "react";
import WorkspaceAuth from "./auth";
import "@copilotkit/react-ui/styles.css";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return <WorkspaceAuth>{children}</WorkspaceAuth>;
}