import { INote, INoteList } from "@/types";
import SidebarNoteItem from "@/components/SidebarNoteItem";
import { getAllNotes } from "@/lib/redis";
import { sleep } from "@/lib/utils";
import SidebarNoteListFilter from "./SidebarNoteListFilter";
import SidebarNoteItemHeader from "./SidebarNoteItemHeader";

export default async function NoteList() {

  await sleep(2000);
  const notes = await getAllNotes();

  if(Object.entries(notes).length === 0) {
    return <div className='notes-empty'>
      {'No notes created yet!'}
    </div>
  }

  // const arr = Object.entries(notes);

  // if (arr.length === 0) {
  //   return <div className="note-empty">{"No notes created yet!"}</div>;
  // }

  // return (
  //   <ul className="notes-list">
  //     {arr.map(([noteId, note]) => {
  //       const { title, updateTime } = JSON.parse(note) as INote;
  //       return (
  //         <li key={noteId}>
  //           <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );

  return <SidebarNoteListFilter notes={
      Object.entries(notes).map(([noteId, note]) => {
      const noteData = JSON.parse(note)
      return {
        noteId,
        note: noteData,
        header: <SidebarNoteItemHeader title={noteData.title} updateTime={noteData.updateTime}></SidebarNoteItemHeader>
      }
  })
  }>
  </SidebarNoteListFilter>
}
