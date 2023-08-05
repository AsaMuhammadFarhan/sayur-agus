const k = 1024;
const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export function formatBytesRead(bytes: number, decimals: number = 2) {
  if (!+bytes) return "0 Bytes";

  const dm = decimals < 0 ? 0 : decimals;

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatBytesMB(bytes: number) {
  if (!+bytes) return 0;
  const i = 2; // sizes[2]
  return bytes / Math.pow(k, i);
}