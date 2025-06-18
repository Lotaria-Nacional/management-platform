import path from "path";
import { Request, Response, Router } from "express";
import { upload } from "@/shared/middleware/upload";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const CLOUDFLARE_AccountID = process.env.CLOUDFLARE_AccountID
const CLOUDFLARE_Access_Key = process.env.CLOUDFLARE_Access_Key
const CLOUDFLATE_SECRET = process.env.CLOUDFLARE_Secret_Access

export const cloudflareRouter = Router()

const client = new S3Client({
    region:'us-east-1',
    endpoint:`https://${CLOUDFLARE_AccountID}.r2.cloudflarestorage.com`,
    forcePathStyle: true,
    credentials: {
        accessKeyId:CLOUDFLARE_Access_Key!,
        secretAccessKey:CLOUDFLATE_SECRET!
    }
})

cloudflareRouter.post("/teste",upload.single("file"), async (req,res)=> {

    const file = req.file as Express.Multer.File
    const fileBuffer = file.buffer
    try {

        const fileExtension = path.extname(file.originalname).replace(".", "");
        const filename = path.parse(file.originalname).name;
        const fullFilename = `${filename}-${Date.now()}.${fileExtension}`;
        const fileKey = `lotarianacional/${fullFilename}`;

        await client.send(
            new PutObjectCommand({
                Bucket:'lotaria-nacional',
                Key:`lotarianacional/${filename}-${Date.now()}.${fileExtension}`,
                Body:fileBuffer
            })
        )

        const getCommand = new GetObjectCommand({
            Bucket: "lotaria-nacional",
            Key: fileKey,
        });

        const signedUrl = await getSignedUrl(client, getCommand, { expiresIn: 3600 });


        res.status(200).json({message: 'Enviado com sucesso', data:signedUrl})
    
    } catch (error) {
        res.status(500).json({ message:'error', error })
    }
})

cloudflareRouter.delete("/delete", async (req,res) => {
      
        try {
            const key = "lotarianacional/IMG_2609-1750257363369.PNG"
          const command = new DeleteObjectCommand({
            Bucket: "lotaria-nacional",
            Key: key,
          });
      
          await client.send(command);
      
          res.status(200).json({
            message: "Ficheiro removido com sucesso",
            deletedKey: key,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Erro ao remover ficheiro", error });
        }
    }
);