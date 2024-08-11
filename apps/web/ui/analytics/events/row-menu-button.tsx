import { Button, Icon, Popover } from "@dub/ui";
import { Copy, Dots } from "@dub/ui/src/icons";
import { cn } from "@dub/utils";
import { Row } from "@tanstack/react-table";
import { Command } from "cmdk";
import { useState } from "react";
import { toast } from "sonner";
import { EventDatum } from "./events-table";

export function RowMenuButton({ row }: { row: Row<EventDatum> }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      openPopover={isOpen}
      setOpenPopover={setIsOpen}
      content={
        <Command tabIndex={0} loop className="focus:outline-none">
          <Command.List className="flex w-screen flex-col gap-1 p-1 text-sm sm:w-auto sm:min-w-[130px]">
            {"event_id" in row.original && (
              <MenuItem
                icon={Copy}
                label="Copy event ID"
                onSelect={() => {
                  if (!("event_id" in row.original)) return;
                  navigator.clipboard.writeText(row.original.event_id);
                  toast.success("Copied to clipboard");
                  setIsOpen(false);
                }}
              />
            )}
            <MenuItem
              icon={Copy}
              label="Copy click ID"
              onSelect={() => {
                navigator.clipboard.writeText(row.original.click_id);
                toast.success("Copied to clipboard");
                setIsOpen(false);
              }}
            />
          </Command.List>
        </Command>
      }
      align="end"
    >
      <Button
        type="button"
        className="h-8 whitespace-nowrap px-2"
        variant="outline"
        icon={<Dots className="h-4 w-4 shrink-0" />}
      />
    </Popover>
  );
}

function MenuItem({
  icon: Icon,
  label,
  onSelect,
}: {
  icon: Icon;
  label: string;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      className={cn(
        "flex cursor-pointer select-none items-center gap-2 whitespace-nowrap rounded-md px-3.5 py-2 text-sm text-gray-950",
        "data-[selected=true]:bg-gray-100",
      )}
      onSelect={onSelect}
    >
      <Icon className="h-4 w-4 shrink-0 text-gray-600" />
      {label}
    </Command.Item>
  );
}
