export async function GET() {
    const res = await fetch(`${process.env.DISCORD_API_ROUTE}/channels/${process.env.TEST_CHANNEL_ID}/messages`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    });
    const data = await res.json();
    return Response.json({ data });
}