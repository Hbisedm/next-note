'use client'

import SidebarNoteItem from '@/components/SidebarNoteItem';
import { useSearchParams } from 'next/navigation';
import { Children } from 'react';
import SidebarNoteItemContent from './SidebarNoteItemContent';

export default function SidebarNoteListFilter({notes}) {

  const searchParams = useSearchParams()
  const searchText = searchParams.get('q')


	return <ul className='notes-list'>
		{

			notes.map((noteItem: any) => {

				const { noteId,
					note,
					header} = noteItem
				if(!searchText || (searchText && note.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))){

				return (<SidebarNoteItemContent
						key={noteId}
						id={noteId}
						title={note.title}
						expandedChildren={
							<p className="sidebar-note-excerpt">
								{note.content.substring(0, 20) || <i>(No content)</i>}
							</p>
						}
					>
						{header}
					</SidebarNoteItemContent>
			      )}
				return null
			})
		}

	</ul>

//   return <ul className="notes-list">
//     {
// 	Children.map(children, (child, index) => {
// 		const title = child.props.title as string;
// 		if(!searchText || (searchText && title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))){
// 			return <li key={index}>{child}</li>
// 		}
// 		return null
// 	})
//     }
//   </ul>
}
