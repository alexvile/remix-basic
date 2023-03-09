import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, {links as NewNoteLinks} from "~/components/NewNote"
import {getStoredNotes, storedNotes} from '~/data/notes'
import NoteList, {links as noteListLinks} from "../components/NoteList";

export default function NotesPage() {
    const notes = useLoaderData();
    return(
    <main>
        <NewNote/>
        <NoteList notes={notes}/>
    </main>)
}
export async function loader() {
    const notes = await getStoredNotes();
    return notes;
}
export async function action({request}) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storedNotes(updatedNotes); 
    return redirect('/notes');
}
export function links() {
    return [...NewNoteLinks(), ...noteListLinks()];
}