import { Button, FormControl, FormLabel } from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { useRef } from "react";
import StarterKit from "@tiptap/starter-kit";

export default function NoticeContent() {
  const rteRef = useRef();
  return (
    <>
      <div className="flex flex-col gap-2">
        <FormLabel>Notice Description</FormLabel>
        <RichTextEditor
          ref={rteRef}
          extensions={[StarterKit]}
          // content="<p>Hello world</p>" // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => (
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          )}
        />
      </div>
      <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button>
    </>
  );
}
