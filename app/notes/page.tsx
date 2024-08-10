import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
    const supabase = createClient();
    const { data: notes } = await supabase.from("notes").select();

    console.log(notes);

    const { data, error } = await supabase
        .from("notes")
        .select("count")
        .single();
    console.log("Notes count:", data?.count);
    console.log(error);

    return (
        <>
            <pre>{JSON.stringify(notes, null, 2)}</pre>
        </>
    );
}
