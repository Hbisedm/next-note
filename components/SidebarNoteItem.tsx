import { INote } from "@/types";
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import dayjs from "dayjs";
import SidebarNoteItemHeader from "./SidebarNoteItemHeader";

export default function SidebarNoteItem({
  noteId,
  note,
}: {
  noteId: string;
  note: INote;
}) {
  const { title, content = "", updateTime } = note;

  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
