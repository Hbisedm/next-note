import React, { Suspense } from "react";
import Link from "next/link";

import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "./EditButton";
import NoteListSkeleton from "./NoteListSkeleton";
import SidebarSearchField from "./SidebarSearchField";
import { useTranslation } from "app/i18n";

export default async function Sidebar({lng}: {lng: string}) {
  const {t} = await useTranslation(lng)
  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/next.svg"
              width="22px"
              height="22px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField lng={lng}></SidebarSearchField>
          <EditButton noteId={null}>{t('new')}</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList></SidebarNoteList>
          </Suspense>
        </nav>
      </section>
    </>
  );
}
