export interface INoteList {
  [key: string]: string;
}

export interface INote {
  title: string;
  content: string;
  updateTime: string;
}


export interface IEditNote{
  noteId: string | null
  title: string
  body: string
}

export interface IPrevNote{
  noteId: string | null
  initialTitle: string
  initialBody: string
}