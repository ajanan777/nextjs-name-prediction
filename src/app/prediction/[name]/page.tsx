export default async function Page({ params }: any) {
    const { name } = await params
    
    return (
        
        <main>
        {" "}
        {params.name}
        </main>
    );
}