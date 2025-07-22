const CLOUD_NAME = 'dxyy6jpne';
const UPLOAD_PRESET = 'Rolling';

export async function uploads(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || '업로드 실패');
  }

  // 업로드 성공한 이미지의 URL 반환
  return data.secure_url;
}
