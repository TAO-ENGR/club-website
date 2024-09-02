export async function GET() {
    const res = await fetch(`${process.env.DISCORD_API_ROUTE}/channels/${process.env.TAO_CHANNEL_ID}/messages`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    });
    const data = await res.json();
    let msgs: any[] = []

    await Promise.all(data.map(async (msg: any) => {
        const new_msg = await replace(msg.content);
        msgs.push({'date': get_date(msg.timestamp), 'title': new_msg});
    }));

    return Response.json(msgs);
}

async function get_channel_name(id: string) {
    const res = await fetch(`${process.env.DISCORD_API_ROUTE}/channels/${id}`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    })
    const data = await res.json();
    return data.name;
}

async function get_username(id: string) {
    const res = await fetch(`${process.env.DISCORD_API_ROUTE}/guilds/${process.env.GUILD_ID}/members/${id}`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    })
    const data = await res.json();
    return data.nick;
}

async function get_role(id: string) {
    const res = await fetch(`${process.env.DISCORD_API_ROUTE}/guilds/${process.env.GUILD_ID}/roles`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    })
    const data = await res.json();
    const role = data.find((r: any) => r.id == id);
    return role.name;
}

function get_date(date: string) {
    const d = new Date(date);
    return (d.getMonth() + 1) + '/' + d.getDate();
}

async function replace(msg: string) {
    const channelPattern = /<#[0-9]+>/g;
    const userPattern = /<@[0-9]+>/g;
    const rolePattern = /<@&[0-9]+>/g;

    const channelMatches = msg.match(channelPattern);
    if (channelMatches) {
        for (const match of channelMatches) {
            const channelId = match.slice(2, -1);
            msg = msg.replace(match, `#${await get_channel_name(channelId)}`);
        }
    }

    const userMatches = msg.match(userPattern);
    if (userMatches) {
        for (const match of userMatches) {
            const userId = match.slice(2, -1);
            msg = msg.replace(match, `@${await get_username(userId)}`);
        }
    }

    const roleMatches = msg.match(rolePattern);
    if (roleMatches) {
        for (const match of roleMatches) {
            const roleId = match.slice(3, -1);
            msg = msg.replace(match, `@${await get_role(roleId)}`);
        }
    }

    return msg;
}