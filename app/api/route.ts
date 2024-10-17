// app/api/route.ts
export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
    console.log('GET', request.url);
    // 处理 GET 请求，例如从数据库获取数据
    return new Response(JSON.stringify({ message: 'GET request received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    console.log('POST', request.url);
    const data = await request.json();
    // 处理 POST 请求，例如将数据存储到数据库
    return new Response(JSON.stringify({ message: 'POST request received', data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}