import React from "react";
import { DialogContent } from "@/components/ui/dialog";

type ContentProps = {
  children: React.ReactNode;
};

function ModalContent(props: ContentProps) {
  const { children } = props;

  return (
    <DialogContent className="flex-1 w-full w-full">
      {children}
    </DialogContent>
  );
}

export default ModalContent;
