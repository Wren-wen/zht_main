/**
 *  Convert '.jpeg', '.png', '.jpg' to '.webp'
 */

import fs from 'fs'
import path from 'path'

import sharp from 'sharp'

const IMAGE_DIR = path.join(__dirname, '../static/')
const CONCURRENCY_NUM = 10
const QUALITY = 80
const SUPPORT_EXTENSIONS = ['.jpg', '.jpeg', '.png']

async function convertImages(dir: string) {
    const entries: fs.Dirent[] = fs.readdirSync(dir, {
        withFileTypes: true,
        recursive: true
    })

    const promises: PromiseLike<any>[] = []

    for (const entry of entries) {
        const fullpath = path.join(entry.parentPath, entry.name)

        if (entry.isDirectory()) 
            convertImages(fullpath)
        else {
            const ext = path.extname(entry.name).toLowerCase()
            if (SUPPORT_EXTENSIONS.includes(ext)) {
                if (promises.length >= CONCURRENCY_NUM) {
                    await Promise.all(promises)
                    promises.length = 0
                }
                
                promises.push(process(fullpath, ext))
            }
        }
    }
} 

async function process(path: string, ext: string) {
    try {
        const srcPath = path
        const dstPath = path.replace(ext, ".webp")

        await sharp(srcPath)
            .webp({ quality: QUALITY })
            .toFile(dstPath)
        
        fs.rmSync(srcPath)
    } catch (err) {
        console.error('Error processing images.')
    }
}

(
    async () => {
        await convertImages(IMAGE_DIR)
    }
)()