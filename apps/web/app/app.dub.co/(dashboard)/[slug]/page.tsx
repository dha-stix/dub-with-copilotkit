"use client"
import WorkspaceLinksClient from "./page-client";
import {CopilotKit} from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";


export default function WorkspaceLinks() {
  return (
		<CopilotKit runtimeUrl='/api/copilotkit/'>
			  <WorkspaceLinksClient />;
			<CopilotPopup
                instructions='Help the user create and delete links from the workspace'
                defaultOpen={true}
                labels={{
                    title: "Dub.co Copilot",
                    initial:
                        "Hello there! I can help you create and delete short links in your workspace.",
                }}
                clickOutsideToClose={false}
            ></CopilotPopup>
		</CopilotKit>
  );

}
