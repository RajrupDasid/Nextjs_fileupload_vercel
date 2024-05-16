"use server"
import { put } from '@vercel/blob';
export const formData = async(formData)=>{
    const imageFile = formData.get('file');
    console.log(imageFile)
    const blob = await put(imageFile.name, imageFile, {
      access: 'public',
    });
    return blob;
  }
