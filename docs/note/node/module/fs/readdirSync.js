import fs from 'fs';
import path from 'path';

export const getFiles = (dirPath, options) => {
  const files = fs.readdirSync(dirPath, options);
  return files;
};

// 读取当前所有文件
export const getAllFiles = (dirList, dirPath, options) => {
  const files = getFiles(dirPath, options);
  for (let i = 0, len = files.length; i < len; i++) {
    const file = files[i];
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) { // 文件夹
      getAllFiles(dirList, filePath, options);
    } else {
      dirList.push({
        file,
        filePath,
      });
    }
  }
  return dirList;
}

// 获取当前所有文件列表组成的 html

export const getAllfileHtmls = (list, basePath) => {
  const html = ['<ul>'];
  list.forEach(({
    file,
    filePath
  }) => {
    const href = filePath.replace(basePath, '');
    html.push(`
      <li>
        <a href="${href}">${filePath}</a>
      </li>
    `);
  });
  html.push('</ul>');
  return html.join('');
}

export const getFileContent = (filePath) => {
  const content = fs.readFileSync(filePath, 'binary');
  return content;
}
