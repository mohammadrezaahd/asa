// import { NextResponse } from 'next/server'
// import { exec } from 'child_process'
// import fs from 'fs'
// import path from 'path'

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '50mb', // محدودیت حجم فایل آپلود شده
//     },
//   },
// }

// export async function POST(req) {
//   try {
//     // دریافت داده‌های فایل از درخواست
//     const body = await req.json()
//     const { file } = body

//     // ذخیره فایل FBX به صورت موقت
//     const fbxPath = path.join(process.cwd(), 'public', 'temp.fbx')
//     fs.writeFileSync(fbxPath, file, 'base64')

//     // مسیر خروجی فایل GLB
//     const outputPath = path.join(process.cwd(), 'public', 'temp.glb')

//     // اجرای دستور تبدیل FBX به GLB
//     return new Promise((resolve, reject) => {
//       exec(`npx fbx2gltf ${fbxPath} -o ${outputPath}`, (error, stdout, stderr) => {
//         if (error || stderr) {
//           console.error('Error during conversion:', error || stderr)
//           reject(new NextResponse(JSON.stringify({ error: 'Conversion failed' }), { status: 500 }))
//         }

//         // بازگشت لینک فایل GLB
//         resolve(new NextResponse(JSON.stringify({ url: '/temp.glb' }), { status: 200 }))
//       })
//     })
//   } catch (error) {
//     return new NextResponse(JSON.stringify({ error: 'Failed to process the request' }), { status: 500 })
//   }
// }
